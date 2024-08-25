import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConsultationSummaryState {
  doctorNotes: string;
  prescribedMedications: string;
  followUp: string;
}

const initialState: ConsultationSummaryState = {
  doctorNotes: '',
  prescribedMedications: '',
  followUp: '',
};

const consultationSummarySlice = createSlice({
  name: 'consultationSummary',
  initialState,
  reducers: {
    setSummary(state, action: PayloadAction<ConsultationSummaryState>) {
      state.doctorNotes = action.payload.doctorNotes;
      state.prescribedMedications = action.payload.prescribedMedications;
      state.followUp = action.payload.followUp;
    },
  },
});

export const { setSummary } = consultationSummarySlice.actions;
export default consultationSummarySlice.reducer;
