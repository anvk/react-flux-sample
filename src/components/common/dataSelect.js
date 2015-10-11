'use strict';

var React = require('react');

var DataSelect = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string,
    error: React.PropTypes.string,
    selectedValue: React.PropTypes.string
  },

  render: function() {
    var createOptionRow = function(option) {
      return (
        <option key={option.value} value={option.value}>{option.name}</option>
      );
    };

    var wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += ' ' + 'has-error';
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          <select
            name={this.props.name}
            className="form-control"
            value={this.props.selectedValue}
            onChange={this.props.onChange} >
            <option value=""></option>
            {this.props.options.map(createOptionRow, this)}
          </select>
          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
});

module.exports = DataSelect;
