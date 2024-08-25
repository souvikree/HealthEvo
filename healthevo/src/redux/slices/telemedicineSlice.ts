import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TelemedicineState {
  callStarted: boolean;
  inWaitingRoom: boolean;
  consultationSummary: string;
}

const initialState: TelemedicineState = {
  callStarted: false,
  inWaitingRoom: true,
  consultationSummary: '',
};

const telemedicineSlice = createSlice({
  name: 'telemedicine',
  initialState,
  reducers: {
    startCall(state) {
      state.callStarted = true;
      state.inWaitingRoom = false;
    },
    endCall(state, action: PayloadAction<string>) {
      state.callStarted = false;
      state.consultationSummary = action.payload;
    },
  },
});

export const { startCall, endCall } = telemedicineSlice.actions;
export default telemedicineSlice.reducer;
