import React, { useContext } from "react";
import CartContext from "../CartContext.js";
import Header from "../components/header/header.jsx";
import CartItem from "uiComponents/cartItem";
import Footer from "../components/footer/footer.jsx"
import "./cart.css";

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    const cartData = cartItems
    const totalPrice = cartItems.length == 0 ? 0 : cartData.reduce((total, item) => total + item.price, 0).toFixed(2);
    return (
        <>
            <Header />
            <div className="cart">
                <h2>Your Cart</h2>
                {cartData.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div>
                        {cartData.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                        <p className="total-price">Total: ${totalPrice}</p>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;

