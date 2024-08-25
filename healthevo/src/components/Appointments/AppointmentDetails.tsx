import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const AppointmentDetails: React.FC<{ appointmentId: string }> = ({ appointmentId }) => {
  const appointment = useSelector((state: RootState) =>
    state.appointments.items.find((appt) => appt.id === appointmentId)
  );

  if (!appointment) {
    return <div className="bg-white p-6 rounded-lg shadow-md">Appointment not found</div>;
  }

  const handleReschedule = () => {
    // Logic to handle rescheduling (e.g., redirect to a form or open a modal)
    alert('Reschedule functionality not yet implemented.');
  };

  const handleJoinVirtualLink = () => {
    if (appointment.virtualLink) {
      window.open(appointment.virtualLink, '_blank');
    } else {
      alert('No virtual link available for this appointment.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Appointment Details</h2>
      <p className="text-gray-700 mb-2">Date: {appointment.date.toLocaleDateString()}</p>
      <p className="text-gray-700 mb-2">Time: {appointment.time}</p>
      <p className="text-gray-700 mb-2">Doctor: {appointment.doctorName}</p>
      <p className="text-gray-700 mb-2">Location: {appointment.location}</p>
      <p className="text-gray-700 mb-2">Reason: {appointment.reason}</p>
      {appointment.virtualLink && (
        <p className="text-gray-700 mb-2">
          <button
            onClick={handleJoinVirtualLink}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Join Virtual Session
          </button>
        </p>
      )}
      <button
        onClick={handleReschedule}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
      >
        Reschedule
      </button>
    </div>
  );
};

export default AppointmentDetails;
