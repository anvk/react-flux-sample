'use strict';

var Dispatcher = require('../dispatcher/appDispatcher.js'),
    ActionTypes = require('../constants/actionTypes.js'),
    AuthorApi = require('../api/authorApi.js');

var InitializeActions = {
  initApp: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors()
      }
    });
  }
};

module.exports = InitializeActions;
