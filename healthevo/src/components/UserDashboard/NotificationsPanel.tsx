// src/components/UserDashboard/NotificationsPanel.tsx
import React from 'react';
import { Box, List, ListItem, ListItemText, Divider, Typography, Avatar } from '@mui/material';
import { Notifications as NotificationsIcon } from '@mui/icons-material';

const notifications = [
  { message: 'Appointment confirmed with Dr. Smith', date: '2024-08-20' },
  { message: 'New health recommendation available', date: '2024-08-19' },
  { message: 'Lab results uploaded', date: '2024-08-18' },
  { message: 'Prescription ready for pickup', date: '2024-08-17' },
  { message: 'Annual checkup reminder', date: '2024-08-16' },
  // Add more notifications as needed
];

const NotificationsPanel: React.FC = () => {
  return (
    <Box className="bg-white p-4 rounded-lg shadow-lg" style={{ maxHeight: '290px', overflowY: 'auto' }}>
      <Box className="flex items-center mb-4">
        <Avatar className="bg-blue-600 text-white mr-2">
          <NotificationsIcon />
        </Avatar>
        <Typography variant="h6" className="font-bold text-blue-700">Notifications</Typography>
      </Box>
      <List>
        {notifications.map((notification, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText
                primary={notification.message}
                secondary={notification.date}
                primaryTypographyProps={{ className: 'text-gray-800 font-semibold' }}
                secondaryTypographyProps={{ className: 'text-gray-500 text-sm' }}
              />
            </ListItem>
            {index < notifications.length - 1 && <Divider className="my-2" />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default NotificationsPanel;
