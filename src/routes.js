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

    // authors
    <Route name="authors" handler={require('./components/authors/authorPage.js')} />
    <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage.js')} />
    <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage.js')} />

    // courses
    <Route name="courses" handler={require('./components/courses/coursePage.js')} />
    <Route name="addCourse" path="course" handler={require('./components/courses/manageCoursePage.js')} />
    <Route name="manageCourse" path="course/:id" handler={require('./components/courses/manageCoursePage.js')} />

    // use path="about-page" for changing URL name
    <Route name="about" handler={require('./components/about/aboutPage.js')} />
    <NotFoundRoute handler={require('./components/notFoundPage.js')} />
    <Redirect from="about-us" to="about" />
    <Redirect from="about/*" to="about" />
  </Route>
);

module.exports = routes;
