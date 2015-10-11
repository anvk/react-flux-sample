'use strict';

var Dispatcher = require('../dispatcher/appDispatcher.js'),
    CourseApi = require('../api/courseApi.js'),
    ActionTypes = require('../constants/actionTypes.js');

var CourseActions = {
  createCourse: function(course) {
    var newCourse = CourseApi.saveCourse(course);

    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_COURSE,
      course: newCourse
    });
  },

  updateCourse: function(course) {
    var updatedCourse = CourseApi.saveCourse(course);

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_COURSE,
      course: updatedCourse
    });
  },

  deleteCourse: function(id) {
    CourseApi.deleteCourse(id);

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_COURSE,
      id: id
    });
  }
};

module.exports = CourseActions;
