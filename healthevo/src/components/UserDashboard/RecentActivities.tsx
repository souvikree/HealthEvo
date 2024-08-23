// src/components/UserDashboard/RecentActivities.tsx
import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const activities = [
  { title: 'Appointment with Dr. Smith', date: '2024-08-01' },
  { title: 'Blood Test Results Uploaded', date: '2024-08-02' },
  { title: 'New Health Recommendations Available', date: '2024-08-03' },
];

const RecentActivities: React.FC = () => {
  return (
    <Card className="bg-white shadow-md">
      <CardContent>
        <Typography variant="h6" className="font-bold">Recent Activities</Typography>
        <List>
          {activities.map((activity, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={activity.title}
                secondary={activity.date}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
