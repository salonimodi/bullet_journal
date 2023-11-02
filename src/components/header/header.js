// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* Add more navigation links */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
