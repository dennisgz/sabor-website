"use strict";

var path = require("path");
var gulp = require("gulp");
var gutil = require("gulp-util");
var gh_pages = require('gulp-gh-pages');
var express = require("express");
var browserSync = require("browser-sync").create();
var webpack = require("webpack");
var webpackStream = require("webpack-stream");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpackConfig = process.env.NODE_ENV === "production" ?
  require("./webpack.config.prod")
: require("./webpack.config.dev");


// The development server (the recommended option for development)
gulp.task("default", ["browser-sync"]);

// Production build
gulp.task("build", ["webpack:build"]);

gulp.task("gh", ["webpack:build:gh"]);

// Deploy to gh-pages
gulp.task("deploy", ["git:deploy"]);

/**
 * Build. One and done.
 */
gulp.task("webpack:build", function() {
  return gulp.src("src/index.js")
    .pipe(webpackStream(webpackConfig, null, function(err, stats) {
      if (err) throw new gutil.PluginError("webpack:build", err);
      gutil.log("[webpack:build]", stats.toString({
        colors: true
      }));
      // callback();
    }))
    .pipe(gulp.dest("dist/"));
});

/**
 * A customized webpack-dev-server setup.
 * Integrates hot-module-reloading.
 */
gulp.task("webpack-dev-server", function(callback) {
  var app = express();
  // Start a webpack-dev-server
  var compiler = webpack(webpackConfig);

  app.use(require("webpack-dev-middleware")(compiler, {
    // server and middleware options
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true
    }
  }));

  app.use(require("webpack-hot-middleware")(compiler));

  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "index.html"));
  // });

  app.listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    // Server listening
    gutil.log("[webpack-dev-server]", "http://localhost:8080");

    // keep the server alive or continue?
    // callback();
    console.log("Listening at http://localhost:8080");
  });
});


/**
 * Wraps the webpack-dev-server in browser-sync.
 * Standard webpack-dev-server doesn't HMR for css-modules.
 * This task watches for any .css changes and notifies the server.
 */
gulp.task("browser-sync", function() {
  var compiler = webpack(webpackConfig);

  browserSync.init({
    ui: false,
    ghostMode: false,
    online: false,
    open: false,
    notify: false,
    host: "localhost",
    port: "8080",
    xip: false,
    server: {
      baseDir: webpackConfig.devServer.contentBase,
      middleware: [
        webpackDevMiddleware(compiler, {
          // server and middleware options
          publicPath: webpackConfig.output.publicPath,
          stats: {
            colors: true
          }
        }),
        webpackHotMiddleware(compiler)
      ]
    },
    files: [
      "./dist/*.css"
    ]
  }, function (err, bs) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    // Server listening
    gutil.log("[webpack-dev-server]", "http://localhost:8080");

    // keep the server alive or continue?
    // callback();
    console.log("Listening at http://localhost:8080");
    console.log("Compiling ... Wait for 'bundle is VALID'");
  });
});

/*
 * Deployment.
 */
gulp.task("git:deploy", function() {
  return gulp.src('./dist/**/*')
    .pipe(gh_pages());
});

/**
 * Build for gh-pages
 */
gulp.task("webpack:build:gh", function() {
  return gulp.src("src/index.js")
    .pipe(webpackStream(require("./webpack.config.gh"), null, function(err, stats) {
      if (err) throw new gutil.PluginError("webpack:build:gh", err);
      gutil.log("[webpack:build:gh]", stats.toString({
        colors: true
      }));
      // callback();
    }))
    .pipe(gulp.dest("dist/"));
});


