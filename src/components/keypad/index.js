import React from 'react';
import Button from './button';

require('./keypad.scss');

class Keypad extends React.Component {

  _createButton(label, action) {
    return (
      <div className="keypad__cell">
        <Button key={label} clickHandler={action}>{label}</Button>
      </div>
    );
  }
  render() {
    const computeKey = this._createButton(
      this.props.computeKey.label,
      this.props.computeKey.action
    );
    const clearKey = this._createButton(
      this.props.clearKey.label,
      this.props.clearKey.action
    );
    const buttons = this.props.keypad.map(k => this._createButton(k.label, k.action));
    const functionKeys = this.props.functionKeys.map(k => this._createButton(k.label, k.action));
    return (
      <div className="keypad">
        <div className="keypad__numpad">
          {buttons}
          <div className="keypad__compute-row">
            <div className="keypad__compute">{computeKey}</div>
            <div className="keypad__clear">{clearKey}</div>
          </div>
        </div>
        <div className="keypad__function-keys">
          {functionKeys}
        </div>
      </div>
    );
  }
}

Keypad.propTypes = {
  keypad: React.PropTypes.array,
  functionKeys: React.PropTypes.array,
  computeKey: React.PropTypes.object,
  clearKey: React.PropTypes.object
};

export default Keypad;
