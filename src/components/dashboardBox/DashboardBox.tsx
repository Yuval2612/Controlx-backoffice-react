import React from 'react';
import { DivTest } from './dashboardBox-styling';

export default function DashboardBox(props: any) {

    const clickTest = () => {
        console.log('click', props.consumer);
    };

    return (
        <>
            <DivTest>
                {props.consumer.name}
                <button onClick={clickTest}>Info</button>
            </DivTest>
        </>
    );
}