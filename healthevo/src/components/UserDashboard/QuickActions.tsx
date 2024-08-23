// src/components/UserDashboard/QuickActions.tsx
import React from 'react';
import { Card, CardContent, Button, Typography } from '@mui/material';

const QuickActions: React.FC = () => {
  return (
    <Card className="bg-white shadow-md">
      <CardContent>
        <Typography variant="h6" className="font-bold">Quick Actions</Typography>
        <div className="space-y-4">
          <Button variant="contained" color="primary" className="w-full">
            Schedule an Appointment
          </Button>
          <Button variant="contained" color="secondary" className="w-full">
            Start Telemedicine Session
          </Button>
          <Button variant="contained" color="info" className="w-full">
            View Recommendations
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
