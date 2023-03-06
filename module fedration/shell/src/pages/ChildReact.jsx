import React from "react"
import Header from "../components/header/header.jsx";
import ReactComponent from "../components/childReact/childReact.jsx";
import Footer from "../components/footer/footer.jsx"

const ReactApp = () => {
    return (
        <>
            <Header />
            <ReactComponent />
            <Footer />
        </>
    )
}

export default ReactApp