import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  medicalHistory: string;
  address: string;
  profilePicture: string;
  testimonials?: any; // Replace `any` with a more specific type if possible
  name: string;
  email: string;
}

const initialState: UserState = {
  name: '',
  email: '',
  testimonials: undefined,
  medicalHistory: '',
  address: '',
  profilePicture: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserState>>) => {
      const { name, email, testimonials } = action.payload;
      if (name !== undefined) state.name = name;
      if (email !== undefined) state.email = email;
      if (testimonials !== undefined) state.testimonials = testimonials;
    },
    clearUser: (state) => {
      state.name = '';
      state.email = '';
      state.testimonials = undefined;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
