import React from "react";
import "./CartWidgetItem.scss";

const CartWidgetItem = props => {
  return (
    <div className="dropdown-item">
      <button aria-label="Remove item">
        <i className="bi bi-x"></i>
      </button>
      <img src={props.src} alt={props.name}></img>
      <div>
        <a href={props.href}>{props.name}</a>
        <p>
          <span>
            ${props.price}
            <span className="cents">.00</span>
          </span>{" "}
          x {props.quantity}
        </p>
      </div>
    </div>
  );
};

export default CartWidgetItem;
