
import React, { useState } from 'react';
import { Wrapper } from './sidebar-styling';
//import {Navigate, useRoutes} from 'react-router-dom';

export default function Sidebar() {

    const [display, setDisplay] = useState(false);

    const openClose = () => {
        setDisplay(!display);
    }

    if (!display) {
        return (<button onClick={openClose}>|||</button>);
    }

    return (
        <>
            <button onClick={openClose}>close</button>
            <Wrapper>
                sidebar
            </Wrapper>
        </>
    );
}