import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { Button } from '@mui/material';
import { RootState, AppDispatch } from '../../redux/store';
import { startCall, endCall, setSocketConnection } from '../../redux/slices/videoCallSlice';

const VideoCall: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isCallStarted } = useSelector((state: RootState) => state.videoCall);

  useEffect(() => {
    const socket = io('http://localhost:4000');
    dispatch(setSocketConnection(true));
    
    return () => {
      socket.disconnect();
      dispatch(setSocketConnection(false));
    };
  }, [dispatch]);

  const handleStartCall = () => {
    dispatch(startCall());
  };

  const handleEndCall = () => {
    dispatch(endCall());
  };

  const handleShareScreen = () => {
    // Logic to share screen
    console.log("Share screen clicked");
  };

  const handleUploadFile = () => {
    // Logic to upload file
    console.log("Upload file clicked");
  };

  return (
    <div className="video-call p-4 bg-white rounded shadow-md">
      <div className="video-container mb-4">
        {/* Video Element for Real-time Consultation */}
        <video className="w-full h-60 bg-black"></video>
      </div>
      <div className="controls flex space-x-2">
        {!isCallStarted ? (
          <Button variant="contained" color="primary" onClick={handleStartCall}>Start Call</Button>
        ) : (
          <>
            <Button variant="contained" color="secondary" onClick={handleEndCall}>End Call</Button>
            <Button variant="contained" onClick={handleShareScreen}>Share Screen</Button>
            <Button variant="contained" onClick={handleUploadFile}>Upload File</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoCall;
