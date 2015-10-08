'use strict';

var React = require('react'),
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route,
    NotFoundRoute = Router.NotFoundRoute,
    Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app.js')}>
    <DefaultRoute handler={require('./components/homePage.js')} />
    <Route name="authors" handler={require('./components/authors/authorPage.js')} />
    // use path="about-page" for changing URL name
    <Route name="about" handler={require('./components/about/aboutPage.js')} />
    <NotFoundRoute handler={require('./components/notFoundPage.js')} />
    <Redirect from="about-us" to="about" />
    <Redirect from="author" to="authors" />
    <Redirect from="about/*" to="about" />
  </Route>
);

module.exports = routes;
