import React from 'react';
import { CircularProgress } from '@mui/material';

const WaitingRoom: React.FC = () => {
  return (
    <div className="waiting-room text-center">
      <h2 className="text-2xl mb-4">Your consultation will begin shortly</h2>
      <p className="mb-4">Estimated wait time: 5 minutes</p>
      <CircularProgress />
      <p className="mt-4">Please stay on this page while you wait.</p>
    </div>
  );
};

export default WaitingRoom;
