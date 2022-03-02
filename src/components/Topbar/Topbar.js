import React from "react";
import FrenchFlag from "../../assets/flags/fr.png";
import GermanFlag from "../../assets/flags/de.png";
import ItalianFlag from "../../assets/flags/it.png";
import classes from "./Topbar.module.scss";

const Topbar = () => {
  return (
    <div className={classes.topbar}>
      <div className="container py-2">
        <div className={classes.leftSide}>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownLanguage"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Eng / $
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownLanguage">
              <li class="dropdown-item">
                <select class="form-select" aria-label="Select currency">
                  <option value="usd">$ USD</option>
                  <option value="eur">€ EUR</option>
                  <option value="ukp">£ UKP</option>
                  <option value="jpy">¥ JPY</option>
                </select>
              </li>
              <li>
                <img src={FrenchFlag} alt="French flag"></img>Français
              </li>
              <li>
                <img src={GermanFlag} alt="German flag"></img>Deustch
              </li>
              <li>
                <img src={ItalianFlag} alt="Italian flag"></img>Italiano
              </li>
            </ul>
          </div>
          <div className="vr"></div>
          <p>
            Available 24/7 at <a href="tel:00331697720">(00) 33 169 7720</a>
          </p>
        </div>

        <div className={classes.rightSide}>
          <a href="#">
            <i className="bi bi-heart" role="img" aria-label="Heart"></i>
            Wishlist (3)
          </a>
          <div className="vr"></div>
          <a href="#">
            <i
              className="bi bi-arrow-repeat"
              role="img"
              aria-label="Compare"
            ></i>
            Compare (3)
          </a>
          <div className="vr"></div>
          <a href="#">
            <i
              className="bi bi-geo-alt"
              role="img"
              aria-label="Location pin"
            ></i>
            Order tracking
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

// STYLE THIS ELEMENT CORRECTLY
