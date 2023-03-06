import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Cart from "../pages/Cart.jsx";
import ChildReact from "../pages/ChildReact.jsx";
import React from "react";

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
    }
]);

export default router