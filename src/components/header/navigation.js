import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

class NavBar extends React.PureComponent {
  render() {
    return (
      <header className="navigation">
        <h1>BookStore CMS</h1>
        <nav className="nav-links">
          <Link to="/" className="links">Books</Link>
          <Link to="/categories" className="links">Categories</Link>
        </nav>
      </header>
    );
  }
}

export default NavBar;
