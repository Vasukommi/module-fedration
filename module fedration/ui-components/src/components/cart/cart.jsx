import React from "react";
import PropTypes from "prop-types";
import "./cart.css";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <div className="image-container">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="item-details">
        <div className="name">{item.name}</div>
        <div className="price">${item.price}</div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
