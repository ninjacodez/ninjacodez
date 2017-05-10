import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.redirect = this.redirect.bind(this);
    this.state.url = window.location.href;
  }

  redirect() {
    this.setState({
      redirect: true
    });
  }

  render () {
    if (this.state.redirect && this.state.url !== this.props.url) {
      return <Redirect push to="/" />;
    }
    return (
      <div id="header" onClick={this.redirect}>
      <h3>moodify</h3>
      <img id="mascot" src="./img/moodify.png" width="80" height="80"/>
      </div>)
  }
}

export default Header;