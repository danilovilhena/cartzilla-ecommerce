import React from "react";
import FrenchFlag from "../../assets/flags/fr.png";
import GermanFlag from "../../assets/flags/de.png";
import ItalianFlag from "../../assets/flags/it.png";
import AmericanFlag from "../../assets/flags/en.png";
import "./Topbar.scss";

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                    <div class="dropdown">
                        <a
                            class="dropdown-toggle"
                            type="button"
                            id="dropdownLanguage"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img src={AmericanFlag} alt="USA flag"></img> Eng / $
                        </a>
                        <ul class="dropdown-menu shadow" aria-labelledby="dropdownLanguage">
                            <li>
                                <select class="form-select form-select-sm" aria-label="Select currency">
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
                    <p className="mb-0">
                        Available 24/7 at{" "}
                        <a href="tel:00331697720" className="phone">
                            (00) 33 169 7720
                        </a>
                    </p>
                </div>

                <div className="links">
                    <a href="#" className="topbar-link">
                        <i className="bi bi-heart" role="img" aria-label="Heart"></i>
                        Wishlist (3)
                    </a>
                    <a href="#" className="topbar-link">
                        <i className="bi bi-arrow-repeat" role="img" aria-label="Compare"></i>
                        Compare (3)
                    </a>
                    <a href="#" className="topbar-link">
                        <i className="bi bi-geo-alt" role="img" aria-label="Location pin"></i>
                        Order tracking
                    </a>
                </div>

                {/* Small screens menu */}
                <div class="dropdown" id="small-dropdown">
                    <a
                        class="dropdown-toggle"
                        type="button"
                        id="dropdownRight"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Wishlist / Compare / Order tracking
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="dropdownRight">
                        <li>
                            <a href="#" className="topbar-link">
                                <i className="bi bi-heart" role="img" aria-label="Heart"></i>
                                Wishlist (3)
                            </a>
                        </li>
                        <li>
                            <a href="#" className="topbar-link">
                                <i className="bi bi-arrow-repeat" role="img" aria-label="Compare"></i>
                                Compare (3)
                            </a>
                        </li>
                        <li>
                            <a href="#" className="topbar-link">
                                <i className="bi bi-geo-alt" role="img" aria-label="Location pin"></i>
                                Order tracking
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
