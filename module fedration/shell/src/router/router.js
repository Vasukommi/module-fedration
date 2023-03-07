import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Cart from "../pages/Cart.jsx";
import ChildReact from "../pages/ChildReact.jsx";
import Form from "../pages/Form.jsx";
import React from "react";
import Products from "../pages/Products.jsx";
import StateService from "../pages/State.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/cart',
        element: <Cart />
    },
    {
        path: '/users',
        element: <ChildReact />
    },
    {
        path: '/form',
        element: <Form />
    },
    {
        path: '/Products',
        element: <Products />
    },
    {
        path: '/counter',
        element: <StateService />
    }
]);

export default router