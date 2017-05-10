import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (<div id="header">
      <h3>moodify</h3>
      <img id="mascot" src="./img/mood.png" width="40" height="63"/>
      </div>)
  }
}

export default Header;