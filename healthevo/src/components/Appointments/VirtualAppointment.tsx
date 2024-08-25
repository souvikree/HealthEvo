import React, { useEffect, useState } from 'react';

interface Appointment {
  id: string;
  name: string;
  date: Date;
  time: string;
  doctorName: string;
  location: string;
  virtualLink?: string;
}

const dummyAppointments: Appointment[] = [
  {
    id: '1',
    name: 'Jane Doe',
    date: new Date('2024-08-27'),
    time: '10:00 AM',
    doctorName: 'Dr. John Doe',
    location: 'Room 101',
    virtualLink: 'https://example.com/virtual-session-1',
  },
  {
    id: '2',
    name: 'John Smith',
    date: new Date('2024-08-27'),
    time: '2:00 PM',
    doctorName: 'Dr. Jane Smith',
    location: 'Room 202',
    virtualLink: 'https://example.com/virtual-session-2',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    date: new Date('2024-09-28'),
    time: '9:00 AM',
    doctorName: 'Dr. Emily Johnson',
    location: 'Room 303',
    // No virtualLink for this appointment
  },
];

const VirtualAppointment: React.FC = () => {
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const now = new Date();
    const upcomingAppointments = dummyAppointments.filter(app => app.date >= now);

    if (upcomingAppointments.length === 0) {
      setAppointment(null);
      return;
    }

    upcomingAppointments.sort((a, b) => {
      const aDateTime = new Date(a.date.toDateString() + ' ' + a.time);
      const bDateTime = new Date(b.date.toDateString() + ' ' + b.time);
      return aDateTime.getTime() - bDateTime.getTime();
    });

    setAppointment(upcomingAppointments[0]);
  }, []);

  const handleJoinSession = () => {
    if (appointment?.virtualLink) {
      window.open(appointment.virtualLink, '_blank');
    } else {
      alert('No virtual link available for this appointment.');
    }
  };

  const handleViewOtherAppointments = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-semibold mb-4">Virtual Appointment</h2>
      {appointment ? (
        <>
          <p className="text-gray-700 mb-4">
            You have a virtual appointment with Dr. {appointment.doctorName} scheduled on {appointment.date.toDateString()} at {appointment.time}.
          </p>
          <button
            onClick={handleJoinSession}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-150 ease-in-out"
          >
            Join Session
          </button>
          <button
            onClick={handleViewOtherAppointments}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-150 ease-in-out ml-4"
          >
            View Other Appointments
          </button>
        </>
      ) : (
        <p className="text-gray-700">No upcoming appointments.</p>
      )}

      {/* Modal for Viewing Other Appointments */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={handleCloseModal}></div>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto z-50 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Other Virtual Appointments</h3>
            <ul>
              {dummyAppointments
                .filter(app => app.virtualLink)
                .map(app => (
                  <li key={app.id} className="mb-4 p-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{app.doctorName} - {app.time}</span>
                      <a
                        href={app.virtualLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Join
                      </a>
                    </div>
                  </li>
                ))}
            </ul>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-150 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualAppointment;
