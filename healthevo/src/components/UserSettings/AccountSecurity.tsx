import React, { useState } from 'react';

const AccountSecurity: React.FC = () => {
  const [activityLogs, setActivityLogs] = useState([
    { date: '2024-08-20', activity: 'Logged in from a new device' },
    { date: '2024-08-15', activity: 'Password changed' },
  ]);

  return (
    <div className=" p-6  mt-2">
      <h2 className="text-2xl font-semibold mb-4">Account Security</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Recent Activity</label>
        <ul className="list-disc pl-5 mt-2">
          {activityLogs.map((log, index) => (
            <li key={index} className="text-gray-600">{`${log.date}: ${log.activity}`}</li>
          ))}
        </ul>
      </div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Log Out of All Devices
      </button>
    </div>
  );
};

export default AccountSecurity;
