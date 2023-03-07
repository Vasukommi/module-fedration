import React, { useRef, useEffect } from 'react';
import { mount } from "stateService/stateroot";

const StateRoot = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    })

    return <div ref={ref}></div>;
}

export default StateRoot


