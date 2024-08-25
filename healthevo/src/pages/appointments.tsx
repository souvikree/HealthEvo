import React from 'react';
import AppointmentCalendar from '../components/Appointments/AppointmentCalendar';
import VirtualAppointment from '../components/Appointments/VirtualAppointment';
import Sidebar from '@/components/UserDashboard/Sidebar';

const Appointments: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-semibold mb-8">Manage Your Appointments</h1>
          <AppointmentCalendar />
          <VirtualAppointment />
        </div>
      </main>
    </div>
  );
};

export default Appointments;
