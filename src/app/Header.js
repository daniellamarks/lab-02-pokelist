import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {

  render() {
    return (
      <header className="Header">

        {/* <img
          className="logo"
          // alt="cherry blossom tree logo"
          // src="xerneas.png"
        /> */}

        <h1>Pokemon</h1>

      </header>
    );
    
  }
}

export default Header;