'use strict';

var React = require('react'),
    Router = require('react-router'),
    CourseForm = require('./courseForm.js'),
    CourseActions = require('../../actions/courseActions.js'),
    CourseStore = require('../../stores/courseStore.js'),
    AuthorStore = require('../../stores/authorStore.js'),
    toastr = require('toastr');

var ManageCoursePage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  statics: {
    willTransitionFrom: function(transition, component) {
      if (component.state.dirty && !confirm('Leave without saving?')) {
        transition.abort();
      }
    }
  },

  getInitialState: function() {
    return {
      course: { id: '', title: '', length: '', category: '', author: {}},
      authors: [],
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function() {
    var courseId = this.props.params.id; // from the path 'course/:id'

    if (courseId) {
      this.setState({
        course: CourseStore.getCourseById(courseId),
        authors: AuthorStore.getAllAuthors()
      });
    } else {
      this.setState({ authors: AuthorStore.getAllAuthors() });
    }
  },

  setCourseState: function(event) {
    this.setState({dirty: true});

    var field = event.target.name,
        value = event.target.value;

    if (field == 'author') {
      var author = AuthorStore.getAuthorById(value);
      this.state.course[field] = { id: author.id, name: author.firstName + ' ' + author.lastName };
    } else {
      this.state.course[field] = value;
    }

    return this.setState({course: this.state.course});
  },

  courseFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {}; // clear any previous errors

    if (this.state.course.title.length < 3) {
      this.state.errors.title = 'Title must be at least 3 characters.';
      formIsValid = false;
    }

    if (this.state.course.category.length < 3) {
      this.state.errors.category = 'Category must be at least 3 characters.';
      formIsValid = false;
    }

    if (!this.state.course.author.id) {
      this.state.errors.author = 'Auhor cannot be empty.';
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});
    return formIsValid;
  },

  saveCourse: function(event) {
    event.preventDefault();
    if (!this.courseFormIsValid()) {
      return;
    }

    if (this.state.course.id) {
      CourseActions.updateCourse(this.state.course);
    } else {
      CourseActions.createCourse(this.state.course);
    }

    this.setState({dirty: false});

    toastr.success('Course saved.');
    this.transitionTo('courses');
  },

  _parseAuthors: function(authors) {
    var result = [];

    authors.forEach(function(author) {
      result.push({
        value: author.id,
        name: author.firstName + ' ' + author.lastName
      })
    });

    return result;
  },

  render: function() {
    return (
      <CourseForm
        course={this.state.course}
        authors={this._parseAuthors(this.state.authors)}
        authorid={this.state.course.author.id}
        onChange={this.setCourseState}
        onSave={this.saveCourse}
        errors={this.state.errors} />
    );
  }
});

module.exports = ManageCoursePage;
