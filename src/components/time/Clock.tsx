
import React, { useState } from 'react';
import { Div } from './clock-stying';

export default function Clock(props: any) {

    let [time, setTime] = useState(Date());

    setInterval(function () {
        setTime(Date());
    }, 1000);

    return (
        <>
            <Div>
                {time}
            </Div>
        </>
    );
}