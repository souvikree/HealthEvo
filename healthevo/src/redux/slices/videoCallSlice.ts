import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VideoCallState {
  isCallStarted: boolean;
  isSocketConnected: boolean;
}

const initialState: VideoCallState = {
  isCallStarted: false,
  isSocketConnected: false,
};

const videoCallSlice = createSlice({
  name: 'videoCall',
  initialState,
  reducers: {
    startCall(state) {
      state.isCallStarted = true;
    },
    endCall(state) {
      state.isCallStarted = false;
    },
    setSocketConnection(state, action: PayloadAction<boolean>) {
      state.isSocketConnected = action.payload;
    },
  },
});

export const { startCall, endCall, setSocketConnection } = videoCallSlice.actions;
export default videoCallSlice.reducer;
