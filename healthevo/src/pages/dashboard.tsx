// src/pages/dashboard.tsx
import React from 'react';
import { Container, Grid } from '@mui/material';
import Sidebar from '../components/UserDashboard/Sidebar';
import HealthOverview from '../components/UserDashboard/HealthOverview';
import RecentActivities from '../components/UserDashboard/RecentActivities';
import QuickActions from '../components/UserDashboard/QuickActions';
import NotificationsPanel from '../components/UserDashboard/NotificationsPanel';

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <HealthOverview />
            </Grid>
            <Grid item xs={12} md={4}>
              <NotificationsPanel />
              <QuickActions />
            </Grid>
            <Grid item xs={12}>
              <RecentActivities />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
