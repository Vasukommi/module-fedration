import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import './App.css';
import HomePage from "./pages/Home.jsx";
import CartContext from "./CartContext.js";
import router from './router/router.js';
import { Provider } from "react-redux";
import store from "./app/store.js";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  return (
    <Provider store={store}>
      <CartContext.Provider value={{ cartItems, addToCart }}>
        <RouterProvider router={router} >
        </RouterProvider>
      </CartContext.Provider>
    </Provider>
  );
}

export default App;
