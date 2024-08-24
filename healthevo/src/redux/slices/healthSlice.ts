import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface HealthMetric {
  heartRate: number;
  activityLevel: string;
  // Add more health metrics as needed
}

interface Activity {
  date: string;
  description: string;
}

interface Notification {
  message: string;
  date: string;
}

interface HealthState {
  metrics: HealthMetric;
  activities: Activity[];
  notifications: Notification[];
}

const initialState: HealthState = {
  metrics: {
    heartRate: 0,
    activityLevel: 'None',
  },
  activities: [],
  notifications: [],
};

export const healthSlice = createSlice({
  name: 'health',
  initialState,
  reducers: {
    setHealthMetrics: (state, action: PayloadAction<HealthMetric>) => {
      state.metrics = action.payload;
    },
    addActivity: (state, action: PayloadAction<Activity>) => {
      state.activities.push(action.payload);
    },
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push(action.payload);
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const { setHealthMetrics, addActivity, addNotification, clearNotifications } = healthSlice.actions;

export const selectHealthMetrics = (state: RootState) => state.health.metrics;
export const selectActivities = (state: RootState) => state.health.activities;
export const selectNotifications = (state: RootState) => state.health.notifications;

export default healthSlice.reducer;
