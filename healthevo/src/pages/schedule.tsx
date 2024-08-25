import React from 'react';
import AppointmentForm from '../components/Appointments/AppointmentForm';
import Sidebar from '@/components/UserDashboard/Sidebar';

const ScheduleAppointmentPage: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-semibold mb-8">Schedule an Appointment</h1>
          <AppointmentForm />
        </div>
      </main>
    </div>
  );
};

export default ScheduleAppointmentPage;
