// src/components/UserDashboard/NotificationsPanel.tsx
import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { Notifications as NotificationsIcon, Close as CloseIcon } from '@mui/icons-material';

const notifications = [
  { message: 'Your appointment is confirmed for tomorrow.', date: '2024-08-01' },
  { message: 'New health recommendations are available.', date: '2024-08-02' },
];

const NotificationsPanel: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className="bg-white shadow-md">
      <CardContent>
        <Typography variant="h6" className="font-bold">Notifications</Typography>
        <IconButton onClick={handleClick} color="primary">
          <NotificationsIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          className="w-80"
        >
          {notifications.map((notification, index) => (
            <MenuItem key={index} onClick={handleClose}>
              <div className="flex justify-between w-full">
                <span>{notification.message}</span>
                <span className="text-gray-500 text-sm">{notification.date}</span>
                <IconButton size="small" onClick={() => console.log('Dismiss')}>
                  <CloseIcon />
                </IconButton>
              </div>
            </MenuItem>
          ))}
        </Menu>
      </CardContent>
    </Card>
  );
};

export default NotificationsPanel;
