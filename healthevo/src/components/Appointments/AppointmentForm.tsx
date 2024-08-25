import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { addAppointment } from '../../redux/slices/appointmentsSlice';
import { v4 as uuidv4 } from 'uuid';
import { FaUser, FaCalendarAlt, FaClock, FaStethoscope, FaMapMarkerAlt, FaUserMd } from 'react-icons/fa';
import { Icon } from '@iconify/react/dist/iconify.js';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  date: Yup.date().required('Date is required'),
  start: Yup.string().required('Start time is required'),
  end: Yup.string().required('End time is required'),
  reason: Yup.string().required('Reason for visit is required'),
  doctorName: Yup.string().required('Doctor name is required'),
  location: Yup.string().required('Location is required'),
  // Optional field for virtual link if needed
  virtualLink: Yup.string().url('Invalid URL format').notRequired(),
});

const AppointmentForm: React.FC = () => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  return (
    <Formik
      initialValues={{
        id: uuidv4(),
        name: '',
        date: new Date(),
        start: '',
        end: '',
        reason: '',
        doctorName: '',
        location: '',
        virtualLink: '', // New field
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        setIsSubmitting(true);

        const time = values.start;

        const appointment = {
          ...values,
          start: new Date(`${values.date.toISOString().split('T')[0]}T${values.start}`),
          end: new Date(`${values.date.toISOString().split('T')[0]}T${values.end}`),
          time,
        };

        dispatch(addAppointment(appointment));
        setTimeout(() => {
          setIsSubmitting(false);
          setSuccessMessage('Appointment scheduled successfully!');
          resetForm();
        }, 1000);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className="p-6 space-y-5 max-w-lg mx-auto text-sm text-[#333] ml-0">
          {/* Patient Name */}
          <div className="flex items-center space-x-2">
            <FaUser className="text-blue-500" />
            <label className="block text-base">Patient Name</label>
          </div>
          <Field
            name="name"
            type="text"
            className="border p-2 mt-1 w-[500px] focus:ring-2 rounded-xl focus:ring-blue-500"
            placeholder="Enter patient's name"
          />
          <ErrorMessage name="name" component="div" className="text-red-500" />

          {/* Date */}
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-blue-500" />
            <label className="block text-base">Date</label>
          </div>
          <DatePicker
            selected={values.date}
            onChange={(date) => setFieldValue('date', date)}
            className="w-[500px] border p-2 focus:ring-2 rounded-xl focus:ring-blue-500"
          />
          <ErrorMessage name="date" component="div" className="text-red-500" />

          {/* Start and End Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <FaClock className="text-blue-500" />
                <label className="block text-base">Start Time</label>
              </div>
              <Field
                name="start"
                type="time"
                className="border p-2 mt-1 w-[238px] focus:ring-2 rounded-xl focus:ring-blue-500"
              />
              <ErrorMessage name="start" component="div" className="text-red-500" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <FaClock className="text-blue-500 ml-6" />
                <label className="block text-base">End Time</label>
              </div>
              <Field
                name="end"
                type="time"
                className="border p-2 mt-1 w-[238px] ml-5 focus:ring-2 rounded-xl focus:ring-blue-500"
              />
              <ErrorMessage name="end" component="div" className="text-red-500 ml-5" />
            </div>
          </div>

          {/* Reason for Visit */}
          <div>
            <div className="flex items-center space-x-2">
              <FaStethoscope className="text-blue-500" />
              <label className="block text-base">Reason for Visit</label>
            </div>
            <Field
              name="reason"
              as="textarea"
              className="border p-2 mt-1 w-[500px] rounded-xl focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Describe the reason for your visit"
            />
            <ErrorMessage name="reason" component="div" className="text-red-500" />
          </div>

          {/* Doctor Name */}
          <div>
            <div className="flex items-center space-x-2">
              <FaUserMd className="text-blue-500" />
              <label className="block text-base">Doctor Name</label>
            </div>
            <Field
              name="doctorName"
              type="text"
              className="border p-2 mt-1 rounded-xl focus:ring-2 w-[500px] focus:ring-blue-500"
              placeholder="Enter doctor's name"
            />
            <ErrorMessage name="doctorName" component="div" className="text-red-500" />
          </div>

          {/* Location */}
          <div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <label className="block text-base">Location</label>
            </div>
            <Field
              name="location"
              type="text"
              className="border p-2 mt-1 rounded-xl w-[500px] focus:ring-2 focus:ring-blue-500"
              placeholder="Enter location"
            />
            <ErrorMessage name="location" component="div" className="text-red-500" />
          </div>

          {/* Virtual Link (Optional) */}
          <div>
            <div className="flex items-center space-x-2">
            <Icon icon="ri:link" className="text-blue-500" width={16} />
              {/* <FaMapMarkerAlt className="text-blue-500" /> */}
              <label className="block text-base">Virtual Meeting Link (Optional)</label>
            </div>
            <Field
              name="virtualLink"
              type="text"
              className="border p-2 mt-1 rounded-xl w-[500px] focus:ring-2 focus:ring-blue-500"
              placeholder="Enter virtual meeting link (if available)"
            />
            <ErrorMessage name="virtualLink" component="div" className="text-red-500" />
          </div>

          <button
            type="submit"
            className={`rounded-xl py-2 text-white w-[500px] ${
              isSubmitting ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-600'
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Scheduling...' : 'Schedule Appointment'}
          </button>

          {successMessage && (
            <div className="mt-4 p-4 text-green-700 w-[500px] rounded-xl bg-green-100 border border-green-500">
              {successMessage}
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default AppointmentForm;
