import React, { useEffect, useState } from 'react';
import DashboardBox from '../../components/dashboardBox/DashboardBox';
import DashboardFooter from '../../components/dashboardFooter.tsx/DashboardFooter';
import Clock from '../../components/time/Clock';

export default function Dashboard() {

    const [consumers, setConsumers] = useState([{ id: 1, name: 'xxx' }]);
    //const consumers: any[] = [1, 2, 3];

    const fetchConsumers = async () => {
        //const response = await getConsumers();
        //setConsumers(response);

        var response: any[] = [];
        for (let i = 0; i < 30; i++) {
            response.push({
                id: i,
                name: `${i}-${i}`
            });
        }
        //var response = [{ id: 1, name: '11111' }, { id: 2, name: '22222' }];
        setConsumers(response);
    };

    useEffect(() => { fetchConsumers() }, []);

    return (
        <>
            <Clock></Clock>
            <h2>Dashboard</h2>

            <div>
                {consumers.map((consumer) => (
                    <div key={consumer.id}>
                        <DashboardBox consumer={consumer}></DashboardBox>
                    </div>
                ))}
            </div>

            <DashboardFooter></DashboardFooter>
        </>
    );
}