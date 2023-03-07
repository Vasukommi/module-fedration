import React, { useState, useEffect } from "react";
import Card from "uiComponents/card";
import Header from "../components/header/header.jsx";
import "./Products.css";

const Products = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/jewelery")
            .then((res) => res.json())
            .then((data) => {
                setItems(data)
            });
    }, []);

    return (
        <>
            <Header />
            <div className="shell-products">
                {items.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </>
    );
};

export default Products;
