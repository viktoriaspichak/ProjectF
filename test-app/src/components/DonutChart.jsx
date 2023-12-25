import React from 'react';
import { Chart } from 'react-google-charts';

const DonutChart = () => {
    const data = [
        ['Task', 'Point'],
        ['0-50 баллов', 4],
        ['50-75 баллов', 1],
        ['75-100 баллов', 96],
    ];

    const options = {
        title: 'Качество выполнения ДЗ',
        pieHole: 0.5, // Задаёт кольцевую форму (0.4 означает 40% от радиуса)
    };

    return (
        <div style={{ width: '350px' }}>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                height="400px"
            />
        </div>
    );
};

export default DonutChart;
