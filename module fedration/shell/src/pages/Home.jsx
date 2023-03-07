import React, { useState, useContext } from "react";
import Header from "../components/header/header.jsx";
import CartContext from "../CartContext.js";
import Footer from "../components/footer/footer.jsx"
import ProductList from "uiComponents/productList";


import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Product 5",
      price: 400,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Product 6",
      price: 600,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Product 7",
      price: 700,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Product 8",
      price: 800,
      imageUrl: "https://via.placeholder.com/150",
    },
  ]);

  const { cartItems, addToCart } = useContext(CartContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleAddToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity++;
      addToCart(updatedCartItems[existingProductIndex]);
    } else {
      addToCart({ ...product, quantity: 1 });
    }
  };

  const handleSearch = (query) => {
    if (query) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div className="home">
      <Header onSearch={handleSearch} />
      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductList
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
