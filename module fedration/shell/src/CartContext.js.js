import { createContext } from "react";

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
});

export default CartContext;
