import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const HealthRecordDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const record = useSelector((state: RootState) =>
    state.healthRecords.records.find(rec => rec.id === id)
  );

  if (!record) {
    return <div>Record not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{record.testType}</h1>
      <p className="text-gray-600">Provider: {record.provider}</p>
      <p className="text-gray-600">Date: {record.date}</p>
      <p className="text-gray-600">Result: {record.result}</p>
      <a
        href={record.documentUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-500 hover:underline"
      >
        View Document
      </a>
    </div>
  );
};

export default HealthRecordDetails;
