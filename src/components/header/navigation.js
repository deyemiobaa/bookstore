import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

class NavBar extends React.PureComponent {
  render() {
    return (
      <header className="header">
        <h1>Bookstore CMS</h1>
        <nav>
          <Link to="/" className="nav-links">BOOKS</Link>
          <Link to="/categories" className="nav-links">CATEGORIES</Link>
        </nav>
        <button className="icon-button" type="button"><span className="material-icons primary-color">person</span></button>
      </header>
    );
  }
}

export default NavBar;
