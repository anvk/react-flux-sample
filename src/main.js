'use strict';

var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes.js');

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});
