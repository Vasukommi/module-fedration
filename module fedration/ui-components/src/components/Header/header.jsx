import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ cartItemsCount }) => {
  return (
    <header className="header">
      <div className="header__brand">
        <Link to="/">
          <img src="/logo.svg" alt="My E-commerce Store" className="header__logo" />
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="header__list-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="header__list-item">
            <Link to="/cart">Cart ({cartItemsCount})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;