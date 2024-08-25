import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Box, Avatar } from '@mui/material';
import { Dashboard, HealthAndSafety, CalendarToday, Recommend, Settings } from '@mui/icons-material';
import { useRouter } from 'next/router';

const Sidebar: React.FC = () => {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  const userData = {
    name: 'Jane Doe',
    email: 'Ujy5H@example.com',
    imageUrl: 'https://via.placeholder.com/60',
  }

  return (
    <Drawer
      variant="permanent"
      className="w-72"
      classes={{
        paper: 'bg-blue-50 text-gray-800 shadow-lg overflow-hidden',
      }}
      PaperProps={{
        style: { height: '100vh', display: 'flex', flexDirection: 'column' },
      }}
    >
      {/* Logo Section */}
      <Box className="flex items-center justify-center py-2 bg-blue-800 text-white rounded-xl mx-2 my-2">
        <Typography variant="h6" className="font-bold font-mono">HealthEvo</Typography>
      </Box>

      {/* Profile Section */}
      <Box className="flex items-center p-3 bg-white shadow-md rounded-3xl mx-2 mb-4">
        <Avatar 
          alt="Jane Doe" 
          src={userData.imageUrl} 
          className="mr-3 w-12 h-12" 
        />
        <Box>
          <Typography variant="body1" className="font-semibold">{userData.name}</Typography>
          <Typography variant="body2" className="text-gray-600">{userData.email}</Typography>
        </Box>
      </Box>

      <List className="mt-1 space-y-2 flex-grow">
        <ListItem
          button
          onClick={() => handleClick('/dashboard')}
          className="hover:bg-blue-100 transition-colors duration-300 ease-in-out rounded-lg mx-2"
        >
          <ListItemIcon><Dashboard style={{ color: '#007BFF' }} /></ListItemIcon>
          <ListItemText primary="Dashboard" primaryTypographyProps={{ className: 'font-semibold text-gray-900' }} />
        </ListItem>
        <ListItem
          button
          onClick={() => handleClick('/healthrecords')}
          className="hover:bg-blue-100 transition-colors duration-300 ease-in-out rounded-lg mx-2"
        >
          <ListItemIcon><HealthAndSafety style={{ color: '#28A745' }} /></ListItemIcon>
          <ListItemText primary="Health Records" primaryTypographyProps={{ className: 'font-semibold text-gray-900' }} />
        </ListItem>
        <ListItem
          button
          onClick={() => handleClick('/appointments')}
          className="hover:bg-blue-100 transition-colors duration-300 ease-in-out rounded-lg mx-2"
        >
          <ListItemIcon><CalendarToday style={{ color: '#FFC107' }} /></ListItemIcon>
          <ListItemText primary="Appointments" primaryTypographyProps={{ className: 'font-semibold text-gray-900' }} />
        </ListItem>
        <ListItem
          button
          onClick={() => handleClick('/recommendations')}
          className="hover:bg-blue-100 transition-colors duration-300 ease-in-out rounded-lg mx-2"
        >
          <ListItemIcon><Recommend style={{ color: '#DC3545' }} /></ListItemIcon>
          <ListItemText primary="Recommendations" primaryTypographyProps={{ className: 'font-semibold text-gray-900' }} />
        </ListItem>
        <ListItem
          button
          onClick={() => handleClick('/settings')}
          className="hover:bg-blue-100 transition-colors duration-300 ease-in-out rounded-lg mx-2"
        >
          <ListItemIcon><Settings style={{ color: '#6C757D' }} /></ListItemIcon>
          <ListItemText primary="Settings" primaryTypographyProps={{ className: 'font-semibold text-gray-900' }} />
        </ListItem>
      </List>

      <Divider className="mt-auto" />
    </Drawer>
  );
};

export default Sidebar;
