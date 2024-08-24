// src/components/UserDashboard/RecentActivities.tsx
import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Avatar } from '@mui/material';
import { CalendarToday, Assignment, Healing } from '@mui/icons-material';

const activities = [
  { title: 'Appointment with Dr. Smith', date: '2024-08-01', icon: <CalendarToday /> },
  { title: 'Blood Test Results Uploaded', date: '2024-08-02', icon: <Assignment /> },
  { title: 'New Health Recommendations Available', date: '2024-08-03', icon: <Healing /> },
];

const RecentActivities: React.FC = () => {
  return (
    <Card className="bg-white shadow-lg rounded-lg">
      <CardContent>
        <Typography variant="h6" className="font-bold text-blue-700 mb-4">Recent Activities</Typography>
        <List>
          {activities.map((activity, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <Avatar className="bg-blue-100 text-blue-600 mr-3">
                  {activity.icon}
                </Avatar>
                <ListItemText
                  primary={activity.title}
                  secondary={activity.date}
                  primaryTypographyProps={{ className: 'text-gray-800 font-semibold' }}
                  secondaryTypographyProps={{ className: 'text-gray-500' }}
                />
              </ListItem>
              {index < activities.length - 1 && <Divider className="my-2" />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
