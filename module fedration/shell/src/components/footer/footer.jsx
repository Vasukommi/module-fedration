import { mount } from 'childVue/vueApp';
import React, { useRef, useEffect } from 'react';

const Vue = () => {

    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    })

    return <div ref={ref}></div>;
}

export default Vue