// src/components/UserDashboard/QuickActions.tsx
import React from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';
// import EventIcon from '@mui/icons-material/Event';
// import VideoCallIcon from '@mui/icons-material/VideoCall';
// import RecommendationsIcon from '@mui/icons-material/AssignmentTurnedIn'; // Example for recommendations

const QuickActions: React.FC = () => {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-green-50 shadow-lg rounded-lg mt-4">
      <CardContent>
        <Typography variant="h6" className="font-bold text-gray-800 mb-4">
          Quick Actions
        </Typography>
        <div className="space-y-4">
          <Button
            variant="contained"
            color="primary"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition-transform transform hover:scale-105"
            
          >
            📅 Schedule an Appointment
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md transition-transform transform hover:scale-105"
            
          >
            📞 Start Telemedicine Session
          </Button>
          <Button
            variant="contained"
            color="info"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-md transition-transform transform hover:scale-105"
            
          >
            📝 View Recommendations
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
