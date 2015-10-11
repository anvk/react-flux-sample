'use strict';

var React = require('react'),
    Input = require('../common/textInput.js'),
    DataSelect = require('../common/dataSelect.js');

var CourseForm = React.createClass({

  propTypes: {
    authors: React.PropTypes.array.isRequired,
    course: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object,
    authorid: React.PropTypes.string
  },

  render: function() {
    return (
      <form>
        <h1>Manage Course</h1>
        <Input
          name="title"
          label="Title"
          value={this.props.course.title}
          onChange={this.props.onChange}
          error={this.props.errors.title} />

        <DataSelect
          name="author"
          label="Author"
          selectedValue={this.props.authorid}
          options={this.props.authors}
          value={this.props.course.author.name}
          onChange={this.props.onChange}
          error={this.props.errors.author} />

        <Input
          name="category"
          label="Category"
          value={this.props.course.category}
          onChange={this.props.onChange}
          error={this.props.errors.category} />

        <Input
          name="length"
          label="Length"
          value={this.props.course.length}
          onChange={this.props.onChange}
          error={this.props.errors.length} />

        <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
      </form>
    );
  }
});

module.exports = CourseForm;
