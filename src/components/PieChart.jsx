import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { DataContext } from '../useContext/DataContext';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const { Data } = useContext(DataContext);

    const getTypeData = () => {
        const typeData = {};

        Data.forEach(item => {
            const type = item.eiType;

            if (!typeData[type]) {
                typeData[type] = 0;
            }

            typeData[type] += Number(item.eiAmount); 
        });

        return typeData;
    };

    const typeData = getTypeData();

    const labels = Object.keys(typeData); 
    const dataValues = Object.values(typeData); 

    const data = {
        labels,
        datasets: [
            {
                label: 'Income/Expenses by Type',
                data: dataValues,
                backgroundColor: [
                    '#FF6384', 
                    '#36A2EB', 
                    '#FFCE56', 
                    '#4BC0C0', 
                    '#9966FF', 
                    '#FF9F40', 
                ],
                borderColor: [
                    '#FF6384', 
                    '#36A2EB', 
                    '#FFCE56', 
                    '#4BC0C0', 
                    '#9966FF', 
                    '#FF9F40', 
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 40, 
                    font: {
                        size: 20,
                        family: 'Arial',
                        weight: 'bold',
                    },
                },
            },
            title: {
                display: true,
                text: 'Pie Chart Example',
            },
        },
    };

    return <Pie data={data} options={options} className='bar-chart'/>;
};

export default PieChart;
