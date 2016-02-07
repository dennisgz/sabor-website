import React from 'react'
import { Router, Route, Redirect, IndexRoute } from 'react-router'

/* Pages */
import Home from 'pages/Home'
import Team from 'pages/Team'
import Releve from 'pages/Releve'
import About from 'pages/About'
import NotFound from 'pages/NotFound'


export default function configureRoutes(history) {
  const App = ({ children }) => children
  return (
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Redirect from="home" to="/" />
        <Route path="team" component={ Team } />
        <Route path="releve" component={ Releve } />
        <Route path="about" component={ About } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>
  )
}
