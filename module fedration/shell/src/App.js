import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import './App.css';
import HomePage from "./pages/Home.jsx";
import CartContext from "./CartContext.js";
import router from './router/router.js';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      <RouterProvider router={router} >
      </RouterProvider>
    </CartContext.Provider>
  );
}

export default App;
