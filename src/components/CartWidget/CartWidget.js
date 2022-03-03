import React from "react";
import CartWidgetItem from "./CartWidgetItem/CartWidgetItem";
import Product1 from "../../assets/products/item-001.jpg";
import Product2 from "../../assets/products/item-002.jpg";
import Product3 from "../../assets/products/item-003.jpg";
import "./CartWidget.scss";

const CartWidget = props => {
  const totalPrice = 1247;
  const cartItems = [
    {name: "Cloud Security Camera", href: "#", price: 122, quantity: "1", src: Product1},
    {name: "Android Smartphone S10", href: "#", price: 799, quantity: "1", src: Product2},
    {name: "Android Smart TV Box", href: "#", price: 67, quantity: "1", src: Product3},
  ];

  return (
    <div class="dropdown-menu" aria-labelledby={props.parentId}>
      <ul>
        {cartItems.map(el => (
          <li>
            <CartWidgetItem name={el.name} href={el.href} price={el.price} quantity={el.quantity} src={el.src} />
          </li>
        ))}
      </ul>
      <div>
        <p>
          Subtotal:{" "}
          <span>
            ${totalPrice}
            <span className="cents">.00</span>
          </span>
        </p>
        <button>
          Expand cart <i className="bi bi-chevron-right"></i>
        </button>
      </div>
      <button>
        <i className="bi bi-credit-card"></i>Checkout
      </button>
    </div>
  );
};

export default CartWidget;
