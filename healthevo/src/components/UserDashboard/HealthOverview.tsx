// src/components/UserDashboard/HealthOverview.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Heart Rate',
      data: [70, 75, 80, 85, 90, 95],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const HealthOverview: React.FC = () => {
  return (
    <Card className="bg-white shadow-md">
      <CardContent>
        <Typography variant="h6" className="font-bold">Health Overview</Typography>
        <Line data={data} />
      </CardContent>
    </Card>
  );
};

export default HealthOverview;
