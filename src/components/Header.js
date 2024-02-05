import * as React from 'react';
import HeaderAuth from './HeaderAuth.js';
import HeaderGuest from './HeaderGuest.js';

function Header(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <HeaderAuth/>;
    }
    return <HeaderGuest/>;
  }

  export default Header;