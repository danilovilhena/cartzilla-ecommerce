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
      <div className="container d-flex justify-content-between align-items-center py-2">
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
        <button>
          <i className="bi bi-person"></i>
          <div>
            <p>Hello, Sign in</p>
            <b>My Account</b>
          </div>
        </button>
        {/* Cart button */}
        <button className="dropdown-toggle" id="dropdownCart" data-bs-toggle="dropdown" aria-expanded="false">
          <div className="position-relative">
            <i className="bi bi-cart"></i>
            <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
              <span className="visually-hidden">4 itens in cart</span>
            </span>
          </div>
          <p>My Cart</p>
          <b>$1,247.00</b>
        </button>
        <CartWidget parentId="dropdownCart" />
      </div>
    </div>
  );
};

export default Header;
