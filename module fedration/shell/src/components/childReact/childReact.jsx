import React, { useRef, useEffect } from 'react';
import { mount } from "childReact/reactRoot";

const ReactApp = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    })

    return <div ref={ref}></div>;
}

export default ReactApp


