import React from "react";
import "./card.css";

const Card = ({ item }) => {
  const { title, price, category, description, image, rating } = item;

  return (
    <div className="card">
      <img className="ui-card-image" src={image} alt={title} />
      <div className="card-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Category: {category}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating.rate} ({rating.count} reviews)</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
