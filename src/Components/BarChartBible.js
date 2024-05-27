import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { calculateProgress } from './BibleUtil';
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);




const BarChartBible = ({ group, books, color }) => {
    const progressData = calculateProgress(books);

    const data = {
        labels: books,
        datasets: [{
            label: `${group} Reading Progress`,
            data: progressData,
            backgroundColor: color,
            borderColor: color,
            borderWidth: 1,

        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white', // Adjust legend text color
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'white', // Adjust x-axis label color
                },
                stacked: true,
            },
            y: {
                ticks: {
                    color: 'grey', // Adjust x-axis label color
                },
                stacked: true,
                beginAtZero: true
            }
        }
    };

    return <Bar data={data} options={options} />;
};

export default BarChartBible;
