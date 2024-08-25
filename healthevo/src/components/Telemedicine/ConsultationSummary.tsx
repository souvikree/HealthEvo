/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { RootState, AppDispatch } from '../../redux/store';
import { setSummary } from '../../redux/slices/consultationSummarySlice';

const ConsultationSummary: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { doctorNotes, prescribedMedications, followUp } = useSelector((state: RootState) => state.consultationSummary);

  const handleDownload = () => {
    // Logic to handle downloading the summary
    console.log("Download clicked");
  };

  return (
    <div className="consultation-summary p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Consultation Summary</h2>
      <p className="mb-2"><strong>Doctor's Notes:</strong> {doctorNotes}</p>
      <p className="mb-2"><strong>Prescribed Medications:</strong> {prescribedMedications}</p>
      <p className="mb-2"><strong>Follow-up:</strong> {followUp}</p>
      <Button variant="contained" color="primary" onClick={handleDownload}>Download Summary</Button>
    </div>
  );
};

// Dummy data for demonstration
const dummyData = {
  doctorNotes: "Take medication twice daily.",
  prescribedMedications: "Paracetamol",
  followUp: "In two weeks",
};

// Example of setting summary in Redux store
export const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(setSummary(dummyData));
  }, [dispatch]);

  return <ConsultationSummary />;
};

export default App;
