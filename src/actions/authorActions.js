'use strict';

var Dispatcher = require('../dispatcher/appDispatcher.js'),
    AuthorApi = require('../api/authorApi.js'),
    ActionTypes = require('../constants/actionTypes.js');

var AuthorActions = {
  createAuthor: function(author) {
    var newAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });
  }
};

module.exports = AuthorActions;
