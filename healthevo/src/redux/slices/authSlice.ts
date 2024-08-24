import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: {
    name: string;
    email: string;
  } | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ email: string; password: string }>) {
      // Handle login logic, e.g., API call to authenticate user
    },
    register(state, action: PayloadAction<{ name: string; email: string; password: string }>) {
      // Handle registration logic, e.g., API call to register user
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, register, logout } = authSlice.actions;

export default authSlice.reducer;
