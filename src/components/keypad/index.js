import React from 'react';
import Button from './button';

class Keypad extends React.Component {
  _clickHandler(ev) {
    console.log(ev);
  }
  render() {
    let buttons = this.props.buttons.map((k, i) =>
      <Button key={i} clickHandler={k.action}>{k.label}</Button>);
    return (
      <div className="keypad">
        {buttons}
      </div>
    );
  }
}

Keypad.propTypes = {
  buttons: React.PropTypes.array
};

export default Keypad;
