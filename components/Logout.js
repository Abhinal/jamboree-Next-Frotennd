import Cookies from 'js-cookie';
import React from 'react';
import Home from '../pages/Home';

export default function Logout() {
    Cookies.remove('at')
    Cookies.remove('rt')
    Cookies.remove('name')
  return <div>
      <Home />
  </div>;
}
