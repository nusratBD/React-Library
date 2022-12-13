import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
          name: 'Supplier A',
          price: 4000,
          Sales: 2400,
          amt: 2400,
        },
        {
          name: 'Supplier B',
          price: 3000,
          Sales: 1398,
          amt: 2210,
        },
        {
          name: 'Supplier C',
          price: 2000,
          Sales: 9800,
          amt: 2290,
        },
        {
          name: 'Supplier D',
          price: 2780,
          Sales: 3908,
          amt: 2000,
        },
        {
          name: 'Supplier E',
          price: 1890,
          Sales: 4800,
          amt: 2181,
        },
        {
          name: 'Supplier F',
          price: 2390,
          Sales: 3800,
          amt: 2500,
        },
        {
          name: 'Supplier G',
          price: 3490,
          Sales: 4300,
          amt: 2100,
        },
      ];
      
    return (
            <LineChart width={1000} height={600} data={data}>
                <Line dataKey="price"></Line>
                <Line dataKey='Sales' stroke='tomato'></Line>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
    );
};

export default MyLineChart;