import React from "react";
import "./productList.css";

const ProductList = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-list-card">
      <div className="product-list-card__image-container">
        <img
          className="product-list-card__image"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className="product-list-card__details-container">
        <div className="product-list-card__name">{product.name}</div>
        <div className="product-list-card__price">Rs. {product.price}</div>
        <button className="product-list-card__add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductList;
