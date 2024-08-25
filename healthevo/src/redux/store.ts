import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import authReducer from './slices/authSlice';
import healthReducer from './slices/healthSlice';
import appointmentsReducer from './slices/appointmentsSlice';
import healthRecordsReducer from './slices/healthRecordsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    health: healthReducer,
    appointments: appointmentsReducer,
    healthRecords: healthRecordsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
