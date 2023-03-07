import State from "stateService/counter";
import React from "react";
import StateRoot from "../components/stateService/stateService.jsx";
import Header from "../components/header/header.jsx";

const StateService = () => {
    return (
        <>
            {/* <State /> */}
            <Header/>
            <StateRoot />
        </>
    )
}

export default StateService