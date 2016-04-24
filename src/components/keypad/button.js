import React from 'react';

require('./button.scss');

class Button extends React.Component {
  render() {
    return <button onClick={this.props.clickHandler}>{this.props.children}</button>;
  }
}

Button.propTypes = {
  clickHandler: React.PropTypes.func,
  children: React.PropTypes.string
};

export default Button;
