'use strict';

var React = require('react'),
    Router = require('react-router'),
    Link = require('react-router').Link,
    AuthorStore = require('../../stores/authorStore.js'),
    AuthorActions = require('../../actions/authorActions.js'),
    AuthorList = require('./authorList.js');

var AuthorPage = React.createClass({
  getInitialState: function() {
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },

  render: function() {
    return (
      <div>
        <h1>Authors</h1>
        <Link to="addAuthor" className="btn btn-default">Add Author</Link>
        <AuthorList authors={this.state.authors}/>
      </div>
    );
  }
});

module.exports = AuthorPage;
