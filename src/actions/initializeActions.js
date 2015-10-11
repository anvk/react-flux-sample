'use strict';

var Dispatcher = require('../dispatcher/appDispatcher.js'),
    ActionTypes = require('../constants/actionTypes.js'),
    AuthorApi = require('../api/authorApi.js'),
    CourseApi = require('../api/courseApi.js');

var InitializeActions = {
  initApp: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors(),
        courses: CourseApi.getAllCourses()
      }
    });
  }
};

module.exports = InitializeActions;
