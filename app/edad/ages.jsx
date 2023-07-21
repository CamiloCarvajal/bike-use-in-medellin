"use client";

import { groupByAge } from '../../src/tools/group';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var misoptions = {
    responsive: true,
    animation: true,
    plugins: {
        legend: {
            display: false,
            position: 'left',

        },
        title: {
            text: 'Uso de la bicicleta en Medellín por edad.',
            display: true
        }
    },
    scales: {
        y: {
            min: 0,
            max: 100
        },
        x: {
            ticks: { color: 'rgba(0, 220, 195)' }
        }
    }
};



export default function Ages({ data }) {
    const groupByAgeResult = groupByAge(data)
    const ageTags = Object.keys(groupByAgeResult)
    const ageCount = Object.values(groupByAgeResult)

    var midata = {
        labels: ageTags,
        datasets: [
            {
                label: 'Total',
                data: ageCount,
                backgroundColor: 'rgba(0, 220, 195, 0.5)'
            }
        ]
    };

    return (
        <div>
            <Bar data={midata} options={misoptions} />
        </div>
    )

}