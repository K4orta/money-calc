import React from 'react';
import calc from '../../utils/calculate';

class Display extends React.Component {
  render() {
    return (
      <div className="calc-display">
        <div className="calc-display__raw">{this.props.input}</div>
        <div className="calc-display__processed">{calc(this.props.input)}</div>
      </div>
    );
  }
}

Display.propTypes = {
  input: React.PropTypes.string
};

export default Display;
