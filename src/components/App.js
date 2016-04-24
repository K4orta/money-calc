import React from 'react';
import Keypad from './keypad/index';
import Display from './display/index';
import calculate from '../utils/calculate';

require('./app.scss');

export default class ClacApp extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ''
    };
    this.keypadKeys = [
      this._keyPress('1'),
      this._keyPress('2'),
      this._keyPress('3'),
      this._keyPress('4'),
      this._keyPress('5'),
      this._keyPress('6'),
      this._keyPress('7'),
      this._keyPress('8'),
      this._keyPress('9'),
      this._keyPress('.'),
      this._keyPress('0'),
      {
        label: '$',
        action: () => {
          this.setState({
            input: `${this.state.input}$`
          });
        }
      }
    ];

    this.computeKey = {
      label: '=',
      action: () => {
        this.setState({
          input: `$${Number(calculate(this.state.input)).toFixed(2)}`
        });
      }
    };

    this.clearKey = {
      label: 'DEL',
      action: () => {
        this.setState({
          input: this.state.input.slice(0, this.state.input.length - 1)
        });
      }
    };

    this.functionKeys = [
      this._keyPress('+'),
      this._keyPress('-'),
      this._keyPress('x'),
      this._keyPress('÷'),
      {
        label: 'C',
        action: () => {
          this.setState({
            input: ''
          });
        }
      }
    ];
  }
  _keyPress(str) {
    return {
      label: str,
      action: () => {
        this.setState({
          input: `${this.state.input}${str}`
        });
      }
    };
  }
  render() {
    return (
      <div className="calc-container">
        <Display input={this.state.input || '0'} />
        <Keypad
          keypad={this.keypadKeys}
          functionKeys={this.functionKeys}
          computeKey={this.computeKey}
          clearKey={this.clearKey}
        />
      </div>
    );
  }
}
