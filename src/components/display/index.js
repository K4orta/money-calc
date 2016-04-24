import React from 'react';

require('./display.scss');

class Display extends React.Component {
  render() {
    return (
      <div className="calc-display">
        <div className="calc-display__raw">{this.props.input}</div>
      </div>
    );
  }
}

Display.propTypes = {
  input: React.PropTypes.string
};

export default Display;
