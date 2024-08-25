import React, { useState, useCallback } from 'react';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay, addWeeks, subWeeks, startOfToday } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Button, Modal, Select, MenuItem, InputLabel, FormControl, TextField } from '@mui/material';
import { AiOutlineCalendar, AiOutlineLeftCircle, AiOutlineRightCircle, AiOutlineSearch } from 'react-icons/ai';

const data = [
  {
    id: '1',
    doctorName: 'Dr. John Doe',
    time: '10:00 AM',
    start: '2024-08-26T10:00:00',
    end: '2024-08-26T11:00:00',
    location: 'Room 101',
  },
  {
    id: '2',
    doctorName: 'Dr. Jane Smith',
    time: '2:00 PM',
    start: '2024-08-27T14:00:00',
    end: '2024-08-27T15:00:00',
    location: 'Room 202',
  },
  {
    id: '3',
    doctorName: 'Dr. Emily Johnson',
    time: '9:00 AM',
    start: '2024-09-28T09:00:00',
    end: '2024-09-28T10:00:00',
    location: 'Room 303',
  },
];

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const AppointmentCalendar: React.FC = () => {
  const [viewDate, setViewDate] = useState<Date>(startOfToday());
  const [selectedEvent, setSelectedEvent] = useState<{
    id: string;
    title: string;
    start: Date;
    end: Date;
    location: string;
    doctorName: string;
  } | null>(null);

  const [filter, setFilter] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const events = data
    .filter((appointment) => (
      (filter === '' || appointment.doctorName === filter) &&
      (searchTerm === '' || appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()))
    ))
    .map((appointment) => ({
      id: appointment.id,
      title: `${appointment.doctorName} - ${appointment.time}`,
      start: new Date(appointment.start),
      end: new Date(appointment.end),
      location: appointment.location,
      doctorName: appointment.doctorName,
    }));

  const handleSelectEvent = (event: any) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    setViewDate((prevDate) =>
      direction === 'prev' ? subWeeks(prevDate, 1) : addWeeks(prevDate, 1)
    );
  };

  const handleToday = () => {
    setViewDate(startOfToday());
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 rounded-lg max-w-7xl mx-auto">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-white flex items-center">
          <AiOutlineCalendar className="inline-block mr-2" /> Appointment Calendar
        </h2>
        {/* <div className="flex space-x-2">
          <Button onClick={() => handleNavigate('prev')} className="text-white">
            <AiOutlineLeftCircle size={24} />
          </Button>
          <Button onClick={handleToday} className="text-white">
            Today
          </Button>
          <Button onClick={() => handleNavigate('next')} className="text-white">
            <AiOutlineRightCircle size={24} />
          </Button>
        </div> */}
      </header>

      <div className="mb-4 flex items-center space-x-4">
        {/* <FormControl className="w-1/3">
          <InputLabel>Filter by Doctor</InputLabel>
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white"
          >
            <MenuItem value="">All</MenuItem>
            {Array.from(new Set(data.map((item) => item.doctorName))).map((doctor) => (
              <MenuItem key={doctor} value={doctor}>{doctor}</MenuItem>
            ))}
          </Select>
        </FormControl> */}
        <TextField
          placeholder="Search by Doctor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/3"
          InputProps={{
            startAdornment: <AiOutlineSearch />,
          }}
        />
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        className="rounded-md bg-white shadow-lg"
        onSelectEvent={handleSelectEvent}
        // views={['month', 'week', 'day']}
        // defaultView={Views.MONTH}
        // date={viewDate}
      />

      <Modal open={!!selectedEvent} onClose={handleCloseModal}>
        <div className="bg-white p-6 rounded-lg max-w-sm mx-auto mt-24">
          {selectedEvent && (
            <>
              <h3 className="text-xl font-bold mb-2">{selectedEvent.title}</h3>
              <p><strong>Doctor:</strong> {selectedEvent.doctorName}</p>
              <p><strong>Date:</strong> {format(new Date(selectedEvent.start), 'MMMM d, yyyy')}</p>
              <p><strong>Start Time:</strong> {format(new Date(selectedEvent.start), 'h:mm a')}</p>
              <p><strong>End Time:</strong> {format(new Date(selectedEvent.end), 'h:mm a')}</p>
              <p><strong>Location:</strong> {selectedEvent.location}</p>
              <Button variant="contained" color="primary" onClick={handleCloseModal} className="mt-4">
                Close
              </Button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default AppointmentCalendar;
