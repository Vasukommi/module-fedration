import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../CartContext.js";
import "./header.css";

const Header = ({ products, onSearch }) => {
  const { cartItems } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query.toLowerCase());
  };

  return (
    <header>
      <nav className="header__nav">
        <div className="header__nav-item header__nav-item--logo">
          <NavLink exact to="/">
            <img className="logo-image" src='https://www.oneglobesystems.com/hubfs/Icons-21.png' alt="sc" />
          </NavLink>
        </div>
        <div className="header__nav-item header__nav-item--search">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={searchQuery}
            onChange={handleSearchChange}
            className="header-input"
          />
        </div>
        <div className="header__nav-item header__nav-item--links">
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/cart">
                Cart ({cartItems.length})
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/users">
                Users
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/form">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/products">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/counter">
                Counter
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
