'use strict';

var React = require('react'),
    Router = require('react-router'),
    Link = require('react-router').Link,
    CourseStore = require('../../stores/courseStore.js'),
    CourseActions = require('../../actions/courseActions.js'),
    CourseList = require('./courseList.js');

var CoursePage = React.createClass({
  getInitialState: function() {
    return {
      courses: CourseStore.getAllCourses()
    };
  },

  componentWillMount: function() {
    CourseStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    CourseStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ courses: CourseStore.getAllCourses() });
  },

  render: function() {
    return (
      <div>
        <h1>Courses</h1>
        <Link to="addCourse" className="btn btn-default">Add Course</Link>
        <CourseList courses={this.state.courses}/>
      </div>
    );
  }
});

module.exports = CoursePage;
