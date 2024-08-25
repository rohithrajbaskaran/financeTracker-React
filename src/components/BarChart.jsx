import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { DataContext } from '../useContext/DataContext';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const { Data } = useContext(DataContext);

    const getTypeData = () => {
        const typeData = {};

        Data.forEach(item => {
            const type = item.eiType;
            const amount = Number(item.eiAmount);

            if (!typeData[type]) {
                typeData[type] = { income: 0, expenses: 0 };
            }

            if (amount > 0) {
                typeData[type].income += amount;
            } else {
                typeData[type].expenses += Math.abs(amount);
            }
        });

        return typeData;
    };

    const typeData = getTypeData();

    const labels = [];
    const incomeValues = [];
    const expenseValues = [];

    Object.keys(typeData).forEach(type => {
        labels.push(`${type} Income`, `${type} Expenses`);
        incomeValues.push(typeData[type].income);
        expenseValues.push(typeData[type].expenses);
    });

    const data = {
        labels,
        datasets: [
            {
                label: 'Amount',
                data: [...incomeValues, ...expenseValues], 
                backgroundColor: [
                    ...Array(incomeValues.length).fill('#36A2EB'), 
                    ...Array(expenseValues.length).fill('#FF6384'), 
                ],
                borderColor: [
                    ...Array(incomeValues.length).fill('#36A2EB'),
                    ...Array(expenseValues.length).fill('#FF6384'),
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, 
            },
            title: {
                display: true,
                text: 'Income and Expenses by Type',
                font: {
                    size: 24,
                    family: 'Arial',
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Bar data={data} options={options} className='bar-chart' />;
};

export default BarChart;