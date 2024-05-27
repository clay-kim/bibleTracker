import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend);

const Utils = {
    CHART_COLORS: {
        oldTestament: 'rgb(255, 87, 34, 0.9)',
        newTestament: 'rgb(52, 152, 219, 0.9)',
        unread: 'rgb(55, 67, 50, 0.7)'
    },
    numbers: ({ count, min, max }) => {
        const numbers = [];
        for (let i = 0; i < count; i++) {
            numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return numbers;
    },
    rand: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
};

const initialData = {
    labels: ['Old Testament', 'New Testament', 'Unread'],
    datasets: [
        {
            label: 'Bible Reading Progress',
            data: [119, 217, 3450], // Adjust these values as needed
            backgroundColor: [
                Utils.CHART_COLORS.oldTestament,
                Utils.CHART_COLORS.newTestament,
                Utils.CHART_COLORS.unread
            ],
        }
    ]
};

const config = {
    type: 'pie',
    data: initialData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    color: 'white', // Adjust legend text color
                }
            },
            title: {
                display: true,
                text: 'Bible Reading Progress',
                color: 'white',
            }
        }
    },
};

const PieChart = ({ maxWidth = 550, MaxHeight = 550 }) => {
    return (
        <div style={{ maxWidth, MaxHeight, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Pie data={initialData} options={config.options} />
        </div>
    );
};
export default PieChart;
