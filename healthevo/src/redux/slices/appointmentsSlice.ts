// redux/slice/appointmentsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Appointment } from './appointment';

interface AppointmentsState {
  items: Appointment[];
}

const initialState: AppointmentsState = {
  items: [],
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppointment(state, action: PayloadAction<Appointment>) {
      state.items.push(action.payload);
    },
  },
});

export const { addAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
