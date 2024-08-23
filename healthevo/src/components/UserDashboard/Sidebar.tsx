// src/components/UserDashboard/Sidebar.tsx
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, HealthAndSafety, CalendarToday, Recommend, Settings } from '@mui/icons-material';
import { useRouter } from 'next/router';

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <Drawer
      variant="permanent"
      className="w-64"
      classes={{
        paper: 'bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800 shadow-xl'
      }}
    >
      <List className="mt-4 space-y-2">
        <ListItem 
          button 
          onClick={() => handleClick('/dashboard')} 
          className="hover:bg-blue-200 transition-all duration-200 ease-in-out rounded-lg mx-2"
        >
          <ListItemIcon><Dashboard className="text-blue-600" /></ListItemIcon>
          <ListItemText primary="Dashboard" primaryTypographyProps={{ className: 'font-semibold' }} />
        </ListItem>
        <ListItem 
          button 
          onClick={() => handleClick('/health-records')} 
          className="hover:bg-blue-200 transition-all duration-200 ease-in-out rounded-lg mx-2"
        >
          <ListItemIcon><HealthAndSafety className="text-blue-600" /></ListItemIcon>
          <ListItemText primary="Health Records" primaryTypographyProps={{ className: 'font-semibold' }} />
        </ListItem>
        <ListItem 
          button 
          onClick={() => handleClick('/appointments')} 
          className="hover:bg-blue-200 transition-all duration-200 ease-in-out rounded-lg mx-2"
        >
          <ListItemIcon><CalendarToday className="text-blue-600" /></ListItemIcon>
          <ListItemText primary="Appointments" primaryTypographyProps={{ className: 'font-semibold' }} />
        </ListItem>
        <ListItem 
          button 
          onClick={() => handleClick('/recommendations')} 
          className="hover:bg-blue-200 transition-all duration-200 ease-in-out rounded-lg mx-2"
        >
          <ListItemIcon><Recommend className="text-blue-600" /></ListItemIcon>
          <ListItemText primary="Recommendations" primaryTypographyProps={{ className: 'font-semibold' }} />
        </ListItem>
        <ListItem 
          button 
          onClick={() => handleClick('/settings')} 
          className="hover:bg-blue-200 transition-all duration-200 ease-in-out rounded-lg mx-2"
        >
          <ListItemIcon><Settings className="text-blue-600" /></ListItemIcon>
          <ListItemText primary="Settings" primaryTypographyProps={{ className: 'font-semibold' }} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
