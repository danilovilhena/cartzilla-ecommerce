import React, {useState} from "react";
import FrenchFlag from "../../assets/flags/fr.png";
import GermanFlag from "../../assets/flags/de.png";
import ItalianFlag from "../../assets/flags/it.png";
import AmericanFlag from "../../assets/flags/en.png";
import "./Topbar.scss";

const Topbar = () => {
  const currencies = [
    {name: "Dollar", symbol: "$", abbr: "USD"},
    {name: "Euro", symbol: "€", abbr: "EUR"},
    {name: "Pound", symbol: "£", abbr: "UKP"},
    {name: "Yen", symbol: "¥", abbr: "JPY"},
  ];

  const languages = [
    {name: "English", flag: AmericanFlag, alt: "American flag"},
    {name: "Français", flag: FrenchFlag, alt: "French flag"},
    {name: "Deustch", flag: GermanFlag, alt: "German flag"},
    {name: "Italiano", flag: ItalianFlag, alt: "Italian flag"},
  ];

  const [language, setLanguage] = useState(languages[0]);
  const [currency, setCurrency] = useState(currencies[0]);

  const onChangeLanguage = event => setLanguage(languages.find(el => el.name == event.target.innerText));
  const onChangeCurrency = event => setCurrency(currencies.find(el => el.abbr == event.target.value));

  return (
    <div className="topbar">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between align-items-center">
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              type="button"
              id="dropdownLanguage"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label={language.name + ", " + currency.name}
            >
              <img src={language.flag} alt={language.alt}></img> {language.name.substring(0, 3)} / {currency.symbol}
            </a>
            <ul className="dropdown-menu shadow" aria-labelledby="dropdownLanguage">
              <li>
                <select className="form-select form-select-sm" aria-label="Select currency" onChange={onChangeCurrency}>
                  {currencies.map(el => (
                    <option value={el.abbr} aria-label={el.name} key={el.abbr}>
                      {el.symbol} {el.abbr}
                    </option>
                  ))}
                </select>
              </li>
              {languages
                .filter(el => el.name !== language.name)
                .map(el => (
                  <li role="button" onClick={onChangeLanguage}>
                    <img src={el.flag} alt={el.alt}></img>
                    {el.name}
                  </li>
                ))}
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
        <div className="dropdown" id="small-dropdown">
          <a
            className="dropdown-toggle"
            type="button"
            id="dropdownRight"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Wishlist / Compare / Order tracking
          </a>
          <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="dropdownRight">
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
