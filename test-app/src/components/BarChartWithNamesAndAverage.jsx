import React from 'react';
import { Chart } from 'react-google-charts';

const BarChartWithNamesAndAverage = () => {
    const data = [
        ['Name', 'Average Score'],
        ['John', 75],
        ['Alice', 92],
        ['Bob', 78],
        ['Eva', 95],
    ];

    const options = {
        title: 'Рейтинг по курсу',
        bars: 'horizontal', // Опция для горизонтальных столбцов
        legend: { position: 'none' }, // Опция для скрытия легенды
    };

    return (
        <div style={{ width: '600px',marginRight:"44px" }}>
            <Chart
                chartType="BarChart"
                data={data}
                options={options}
                height="400px"
            />
        </div>
    );
};

export default BarChartWithNamesAndAverage;
