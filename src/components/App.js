import React from 'react';
import Keypad from './keypad/index';
import Display from './display/index';

export default class ClacApp extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ''
    };
    this.keys = [
      this._keyPress('1'),
      this._keyPress('2'),
      this._keyPress('3'),
      this._keyPress('4'),
      this._keyPress('5'),
      this._keyPress('6'),
      this._keyPress('7'),
      this._keyPress('8'),
      this._keyPress('9'),
      this._keyPress('0'),
      this._keyPress('.'),
      this._keyPress('+'),
      this._keyPress('-'),
      this._keyPress('*'),
      this._keyPress('/'),
      this._keyPress('='),
      {
        label: 'del',
        action: () => {
          this.setState({
            input: this.state.input.slice(0, this.state.input.length - 1)
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
        <Display input={this.state.input} />
        <Keypad buttons={this.keys} />
      </div>
    );
  }
}
