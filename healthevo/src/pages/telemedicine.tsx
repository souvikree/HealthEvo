import React from 'react';
import VideoCall from '@/components/Telemedicine/VideoCall';
import WaitingRoom from '@/components/Telemedicine/WaitingRoom';
import ConsultationSummary from '@/components/Telemedicine/ConsultationSummary';
import RatingFeedback from '@/components/Telemedicine/RatingFeedback';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { startCall, endCall } from '@/redux/slices/telemedicineSlice';

const TelemedicinePage: React.FC = () => {
  const dispatch = useDispatch();
  const { callStarted, inWaitingRoom, consultationSummary } = useSelector(
    (state: RootState) => state.telemedicine
  );

  const handleStartCall = () => dispatch(startCall());
  const handleEndCall = () => dispatch(endCall('Consultation completed successfully'));

  return (
    <div className="telemedicine-page p-8">
      {inWaitingRoom && <WaitingRoom />}
      {callStarted && <VideoCall />}
      {!callStarted && !inWaitingRoom && (
        <ConsultationSummary />
      )}
      <RatingFeedback />
    </div>
  );
};

export default TelemedicinePage;
