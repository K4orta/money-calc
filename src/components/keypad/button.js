import React from 'react';
class Button extends React.Component {
  render() {
    return <button onClick={this.props.clickHandler}>{this.props.children}</button>;
  }
}

Button.propTypes = {
  clickHandler: React.PropTypes.func
};

export default Button;
