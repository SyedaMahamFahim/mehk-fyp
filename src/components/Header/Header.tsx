import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Your Title Here</h1>
      <div>
        <h1>Links</h1>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
}

export default Header;
