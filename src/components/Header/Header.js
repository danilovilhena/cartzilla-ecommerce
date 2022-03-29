import React from "react";
import Logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import "./Header.scss";

const Header = () => {
  const categories = [
    "All categories",
    "Computers",
    "Smartphones",
    "TV, Video, Audio",
    "Cameras",
    "Headphones",
    "Wearables",
    "Printers",
    "Video Games",
    "Home Music",
    "Data Storage",
  ];
  return (
    <div className="header">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <a href="/" className="logo">
          <img src={Logo} alt="Logo Cartzilla"></img>
        </a>
        {/* Search bar */}
        <div id="search-group">
          <div className="input-group flex-nowrap" id="search-bar">
            <i className="bi bi-search" role="img" aria-label="Search"></i>
            <input type="text" placeholder="Search for products" aria-label="Search for products" />
          </div>
          <select className="form-select" aria-label="Select category">
            {categories.map(el => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
        {/* Account button */}
        <button id="acc-button">
          <div className="navbar-icon">
            <i className="bi bi-person"></i>
          </div>
          <div>
            <p>Hello, Sign in</p>
            <b>My Account</b>
          </div>
        </button>
        {/* Cart button */}
        <button className="dropdown-toggle" id="cart-button" data-bs-toggle="dropdown" aria-expanded="false">
          <div className="position-relative">
            <div className="navbar-icon">
              <i className="bi bi-cart"></i>
            </div>
            <span className="position-absolute p-2 rounded-circle badge">
              4<span className="visually-hidden">4 itens in cart</span>
            </span>
          </div>
          <div>
            <p>My Cart</p>
            <b>$1,247.00</b>
          </div>
        </button>
        <CartWidget parentId="cart-button" />
      </div>
    </div>
  );
};

export default Header;
