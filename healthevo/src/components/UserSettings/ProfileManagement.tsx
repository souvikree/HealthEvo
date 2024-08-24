import React, { useState } from 'react';

const ProfileManagement: React.FC = () => {
  const [emergencyContact, setEmergencyContact] = useState('');
  const [healthPreferences, setHealthPreferences] = useState('');

  const handleUpdate = () => {
    // Dispatch Redux action or call API to update profile
    console.log('Updating profile with:', { emergencyContact, healthPreferences });
  };

  return (
    <div className=" p-6 ">
      <h2 className="text-2xl font-semibold mb-4">Profile Management</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Emergency Contact</label>
        <input
          type="text"
          value={emergencyContact}
          onChange={(e) => setEmergencyContact(e.target.value)}
          className="w-full border rounded-md p-2 mt-2"
          placeholder="Enter emergency contact"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Health Preferences</label>
        <textarea
          value={healthPreferences}
          onChange={(e) => setHealthPreferences(e.target.value)}
          className="w-full border rounded-md p-2 mt-2"
          rows={4}
          placeholder="Enter health preferences"
        />
      </div>
      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Update Profile
      </button>
    </div>
  );
};

export default ProfileManagement;
