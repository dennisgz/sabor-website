[![Stories in Ready](https://badge.waffle.io/sunyang713/sabor-website.png?label=ready&title=Ready)](https://waffle.io/sunyang713/sabor-website)
[![Build Status](https://travis-ci.org/sunyang713/sabor-website.svg?branch=master)](https://travis-ci.org/sunyang713/sabor-website)

# Sabor's Website

readme and wiki todo: 
 - standard/basic tasks, i.e., board list update, team list update, board-images
 - how to develop tips (mdn for js and css, documentation for everything else)
 - how to add a new page
 - styling wiki
 - react wiki
 - redux wiki
 - webpack and gulp wiki (hint: don't)

Minimum, barebones client-side-only pseudo-dynamic (but really static) javascript application. constructed through careful research and inclusion of only the top and most necessary packages.

Lol jk this is has a buttload of packages which is really frustrating.

New webmaster of Sabor? [Start here!](https://github.com/sunyang713/sabor-website/wiki/Getting-Started)


### Setup


Install npm packages and run the `start` script.
```bash
$ npm install
$ npm start
```

This will run the webpack development server. Open `http://localhost:8080`.

### [Development](https://github.com/sunyang713/sabor-website/wiki/Getting-Started#making-changes)

### [Deployment](https://github.com/sunyang713/sabor-website/wiki/Deployment)


# Architecture

### Core Technology
 - ECMAScript 2015 (ES6) syntax
 - React.js


### Utilities and Modules
The client is written primarily in *React.js*. Some additional utilities and modules:
 - react-fadethrough (made my me!!)
 - react-router (along with history)

The (pseudo) FLUX Architecture is managed with *Redux*. Additional utilities and modules:
 - react-redux
 - thunk
 - react-router-redux
 - redux-devtools

A few standalone utilities and modules:
 - jquery
 - moment
 - immutable (used in isolation with the redux system, specifically the reducers, ideally soon to be deprecated)


### Styling
 - *Stylus* is the chosen preprocessor.
 - *Bootstrap* is the CSS framework. *React-Bootstrap* is also installed to integrate the javascript portion of bootstrap as modules.


## Suggested dev tools
Sublime Text 3 is recommended with package control installed. Here are some good packages:
 - babel snippets.
 - stylus snippets
 - eslint





