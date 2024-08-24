import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { HealthAndSafety, AccessAlarm } from '@mui/icons-material';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

// Sample data for the chart
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Heart Rate',
      data: [70, 75, 80, 85, 90, 89],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

// Function to calculate activity level
const calculateActivityLevel = (heartRate: number) => {
  if (heartRate < 75) return 'Low 🟢';
  if (heartRate < 85) return 'Moderate 🟡';
  return 'High 🔴';
};

const HealthOverview: React.FC = () => {
  // Get the latest heart rate value
  const latestHeartRate = data.datasets[0].data[data.datasets[0].data.length - 1];
  const activityLevel = calculateActivityLevel(latestHeartRate);

  return (
    <Card className="mb-4 shadow-lg border border-gray-200">
      <CardContent>
        <Typography variant="h6" className="font-bold text-blue-800 mb-4">Health Overview</Typography>
        
        {/* First Group of Cards */}
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card className="p-4 bg-blue-50 border border-blue-200 rounded-lg shadow-sm">
            <Box className="flex items-center">
              <HealthAndSafety className="text-blue-600 mr-2" />
              <Typography variant="subtitle1" className="font-semibold">Heart Rate</Typography>
            </Box>
            <Typography variant="h4" className="text-blue-800">{latestHeartRate} bpm</Typography>
          </Card>
          <Card className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow-sm">
            <Box className="flex items-center">
              <AccessAlarm className="text-yellow-600 mr-2" />
              <Typography variant="subtitle1" className="font-semibold">Activity Level</Typography>
            </Box>
            <Typography variant="h4" className="text-yellow-800">{activityLevel}</Typography>
          </Card>
        </Box>
        
        {/* Chart Card - Placed below the first group */}
        <Box className="mt-4">
          <Card className="bg-white border border-gray-200 shadow-md">
            <CardContent>
              <Typography variant="h6" className="font-bold text-blue-800 mb-4">Heart Rate Trend</Typography>
              <Line data={data} />
            </CardContent>
          </Card>
        </Box>

      </CardContent>
    </Card>
  );
};

export default HealthOverview;
