import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import { FaUserMd, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'; // Import icons

const HealthRecordsOverview: React.FC = () => {
  const { records, searchQuery, filters } = useSelector((state: RootState) => state.healthRecords);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;

  const filteredRecords = records.filter(record => {
    return (
      record.testType.includes(filters.testType || '') &&
      record.provider.includes(filters.provider || '') &&
      record.date.includes(filters.date || '') &&
      (record.testType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.provider.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord);

  const handleViewDetails = (id: string) => {
    router.push(`/healthrecords/${id}`);
  };

  const handleClick = (number: number) => {
    setCurrentPage(number);
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Health Records Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentRecords.map(record => (
          <div key={record.id} className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center">
              <FaUserMd className="mr-2" /> {record.testType}
            </h2>
            <p className="text-gray-600 mb-2 flex items-center">
              <FaCalendarAlt className="mr-2" /> {record.provider}
            </p>
            <p className="text-gray-600 flex items-center">
              <FaCalendarAlt className="mr-2" /> {record.date}
            </p>
            <button
              onClick={() => handleViewDetails(record.id)}
              className="mt-4 text-blue-600 hover:text-blue-800 flex items-center"
            >
              View Details <FaArrowRight className="ml-2" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(filteredRecords.length / recordsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index + 1)}
            className={`px-4 py-2 rounded-full border ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white'
            } transition duration-300`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HealthRecordsOverview;
