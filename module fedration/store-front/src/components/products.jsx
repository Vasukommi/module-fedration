import React, { useState, useEffect } from "react";
import Card from "uiComponents/card";
import "./products.css";

const Products = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/electronics")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setItems(data)
            });
    }, []);

    return (
        <>
            <div className="shell-products">
                {items.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </>
    );
};

export default Products;
