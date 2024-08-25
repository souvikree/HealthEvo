import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
} from 'chart.js';
import { RootState } from '../../redux/store';

// Register the necessary components from Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HealthTrends: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Cholesterol Levels');
    const records = useSelector((state: RootState) => state.healthRecords.records);

    // Function to handle category change
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

    // Prepare data for the chart based on selected category
    const chartData: ChartData<'line'> = {
        labels: records.map((record) => record.date),
        datasets: [
            {
                label: selectedCategory,
                data: records.map((record) => {
                    // Adjust this to extract the correct data based on the selected category
                    if (selectedCategory === 'Cholesterol Levels') {
                        return parseInt(record.result, 10);
                    } else if (selectedCategory === 'Blood Levels') {
                        return parseInt(record.result, 10); // Replace with the correct field for Blood Levels
                    }
                    return 0;
                }),
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                fill: true,
                tension: 0.4, // Smooth the line
                pointBackgroundColor: '#3b82f6',
                pointBorderColor: '#fff',
                pointHoverRadius: 5,
            },
        ],
    };

    // Options for the chart
    const options: ChartOptions<'line'> = {
        scales: {
            x: {
                type: 'category',
                title: {
                    display: true,
                    text: 'Date',
                    color: '#374151',
                    font: {
                        size: 16,
                        weight: 500,
                    },
                },
                grid: {
                    display: true,
                },
            },
            y: {
                title: {
                    display: true,
                    text: selectedCategory,
                    color: '#374151',
                    font: {
                        size: 16,
                        weight: 500,
                    },
                },
                grid: {
                    color: 'rgba(156, 163, 175, 0.2)',
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        responsive: true,
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Health Trends</h2>
            <div className="mb-4">
                <label htmlFor="category" className="block text-lg font-medium text-gray-700 mb-2">
                    Select a health trend category
                </label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[240px]"
                    aria-label="Select a health trend category"
                >
                    <option value="Cholesterol Levels">Cholesterol Levels</option>
                    <option value="Blood Levels">Blood Levels</option>
                    {/* Add more options as needed */}
                </select>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
                <Line data={chartData} options={options} />
            </div>
        </div>
    );
};

export default HealthTrends;
