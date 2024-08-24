import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import authReducer from './slices/authSlice';
import healthReducer from './slices/healthSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    health: healthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
