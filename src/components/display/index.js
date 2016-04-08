import React from 'react';
import calc from '../../utils/calculate';

class Display extends React.Component {
  render() {
    return (
      <div className="calc-display">
        <div className="calc-display__raw">{this.props.input}</div>
        <div className="calc-display__processed">{Number(calc(this.props.input)).toFixed(2)}</div>
      </div>
    );
  }
}

Display.propTypes = {
  input: React.PropTypes.string
};

export default Display;
