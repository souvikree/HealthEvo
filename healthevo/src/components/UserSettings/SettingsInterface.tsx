// pages/settings.tsx

import React, { useState } from 'react';

const ProfileManagement: React.FC = () => {
  const [emergencyContact, setEmergencyContact] = useState('');
  const [healthPreferences, setHealthPreferences] = useState('');
  const [primaryCarePhysician, setPrimaryCarePhysician] = useState('');
  const [medicalConditions, setMedicalConditions] = useState('');

  const handleUpdate = () => {
    // Dispatch Redux action or call API to update profile
    console.log('Updating profile with:', { emergencyContact, healthPreferences, primaryCarePhysician, medicalConditions });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-extrabold mb-4">Profile Management</h2>
      <hr className="my-4 border-gray-300" />
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Emergency Contact</label>
        <input
          type="text"
          value={emergencyContact}
          onChange={(e) => setEmergencyContact(e.target.value)}
          className="w-full border rounded-md p-2 mt-2"
          placeholder="Enter emergency contact"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Health Preferences</label>
        <textarea
          value={healthPreferences}
          onChange={(e) => setHealthPreferences(e.target.value)}
          className="w-full border rounded-md p-2 mt-2"
          rows={4}
          placeholder="Enter health preferences"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Primary Care Physician</label>
        <input
          type="text"
          value={primaryCarePhysician}
          onChange={(e) => setPrimaryCarePhysician(e.target.value)}
          className="w-full border rounded-md p-2 mt-2"
          placeholder="Enter primary care physician's name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Medical Conditions</label>
        <textarea
          value={medicalConditions}
          onChange={(e) => setMedicalConditions(e.target.value)}
          className="w-full border rounded-md p-2 mt-2"
          rows={4}
          placeholder="List any medical conditions"
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

const PrivacySettings: React.FC = () => {
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState('public');
  const [dataSharing, setDataSharing] = useState('no');

  const handleToggleTwoFactorAuth = () => {
    setTwoFactorAuth(!twoFactorAuth);
  };

  const handleVisibilityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProfileVisibility(e.target.value);
  };

  const handleDataSharingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDataSharing(e.target.value);
  };

  return (
    <div className="p-6 mt-6">
      <h2 className="text-2xl font-extrabold mb-4">Privacy Settings</h2>
      <hr className="my-4 border-gray-300" />
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={twoFactorAuth}
          onChange={handleToggleTwoFactorAuth}
          className="mr-2"
          title="Enable Two-Factor Authentication"
        />
        <label className="text-gray-700 font-semibold">Enable Two-Factor Authentication</label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Profile Visibility</label>
        <select
          aria-label="Profile Visibility"
          value={profileVisibility}
          onChange={handleVisibilityChange}
          className="w-full border rounded-md p-2 mt-2"
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="friends">Friends</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Data Sharing Preferences</label>
        <select
          aria-label="Data Sharing Preferences"
          value={dataSharing}
          onChange={handleDataSharingChange}
          className="w-full border rounded-md p-2 mt-2"
        >
          <option value="no">Do not share</option>
          <option value="limited">Limited sharing</option>
          <option value="full">Full sharing</option>
        </select>
      </div>
      <p className="text-gray-600 text-sm">
        Your privacy settings control who can see your profile and activities, as well as how your data is shared.
      </p>
    </div>
  );
};

const NotificationPreferences: React.FC = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);

  const handleEmailToggle = () => {
    setEmailNotifications(!emailNotifications);
  };

  const handleSmsToggle = () => {
    setSmsNotifications(!smsNotifications);
  };

  const handlePushToggle = () => {
    setPushNotifications(!pushNotifications);
  };

  return (
    <div className="p-6 mt-6">
      <h2 className="text-2xl font-extrabold mb-4">Notification Preferences</h2>
      <hr className="my-4 border-gray-300" />
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="email-notifications"
          checked={emailNotifications}
          onChange={handleEmailToggle}
          className="mr-2"
        />
        <label htmlFor="email-notifications" className="text-gray-700 font-semibold">
          Receive Email Notifications
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="sms-notifications"
          checked={smsNotifications}
          onChange={handleSmsToggle}
          className="mr-2"
        />
        <label htmlFor="sms-notifications" className="text-gray-700 font-semibold">
          Receive SMS Notifications
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="push-notifications"
          checked={pushNotifications}
          onChange={handlePushToggle}
          className="mr-2"
        />
        <label htmlFor="push-notifications" className="text-gray-700 font-semibold">
          Receive Push Notifications
        </label>
      </div>
      <p className="text-gray-600 text-sm">
        Control how and when you receive notifications from our service.
      </p>
    </div>
  );
};

const AccountSecurity: React.FC = () => {
  const [activityLogs] = useState([
    { date: '2024-08-20', activity: 'Logged in from a new device' },
    { date: '2024-08-15', activity: 'Password changed' },
  ]);
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');

  return (
    <div className="p-6 mt-6">
      <h2 className="text-2xl font-extrabold mb-4">Account Security</h2>
      <hr className="my-4 border-gray-300" />
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Recent Activity</label>
        <ul className="list-disc pl-5 mt-2">
          {activityLogs.map((log, index) => (
            <li key={index} className="text-gray-600">{`${log.date}: ${log.activity}`}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Security Question</label>
        <input
          type="text"
          value={securityQuestion}
          onChange={(e) => setSecurityQuestion(e.target.value)}
          className="w-full border rounded-md p-2 mt-2"
          placeholder="Enter your security question"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Answer</label>
        <input
          type="text"
          value={securityAnswer}
          onChange={(e) => setSecurityAnswer(e.target.value)}
          className="w-full border rounded-md p-2 mt-2"
          placeholder="Enter your answer"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Two-Factor Authentication Setup</label>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          onClick={() => console.log('Setup 2FA')}
        >
          Setup 2FA
        </button>
      </div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Log Out of All Devices
      </button>
    </div>
  );
};

const SettingsInterface: React.FC = () => {
  return (
    <div className="container mx-auto ml-4 font-mono w-[620px]">
      <h1 className="text-4xl font-bold mb-6">Settings</h1>
      <ProfileManagement />
      <PrivacySettings />
      <NotificationPreferences />
      <AccountSecurity />
    </div>
  );
};

export default SettingsInterface;



// // pages/settings.tsx

// import React, { useState } from 'react';
// import { FaCamera, FaLock, FaUserShield, FaCog, FaFileDownload } from 'react-icons/fa';

// const ProfileManagement: React.FC = () => {
//   const [emergencyContact, setEmergencyContact] = useState('');
//   const [healthPreferences, setHealthPreferences] = useState('');
//   const [primaryCarePhysician, setPrimaryCarePhysician] = useState('');
//   const [medicalConditions, setMedicalConditions] = useState('');
//   const [profilePicture, setProfilePicture] = useState<File | null>(null);

//   const handleUpdate = () => {
//     // Dispatch Redux action or call API to update profile
//     console.log('Updating profile with:', { emergencyContact, healthPreferences, primaryCarePhysician, medicalConditions, profilePicture });
//   };

//   const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setProfilePicture(e.target.files[0]);
//     }
//   };

//   return (
//     <div className="p-6 bg-white shadow rounded-lg">
//       <h2 className="text-2xl font-extrabold mb-4">Profile Management</h2>
//       <hr className="my-4 border-gray-300" />
//       <div className="flex items-center mb-4">
//         <label className="block text-gray-700 font-semibold" htmlFor="profilePicture">
//           Profile Picture
//         </label>
//         <input
//           id="profilePicture"
//           type="file"
//           onChange={handleProfilePictureChange}
//           className="ml-4"
//           accept="image/*"
//         />
//         <button type="button" className="ml-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
//           Upload Profile Picture
//           <FaCamera />
//         </button>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 font-semibold">Emergency Contact</label>
//         <input
//           type="text"
//           value={emergencyContact}
//           onChange={(e) => setEmergencyContact(e.target.value)}
//           className="w-full border rounded-md p-2 mt-2"
//           placeholder="Enter emergency contact"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 font-semibold">Health Preferences</label>
//         <textarea
//           value={healthPreferences}
//           onChange={(e) => setHealthPreferences(e.target.value)}
//           className="w-full border rounded-md p-2 mt-2"
//           rows={4}
//           placeholder="Enter health preferences"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 font-semibold">Primary Care Physician</label>
//         <input
//           type="text"
//           value={primaryCarePhysician}
//           onChange={(e) => setPrimaryCarePhysician(e.target.value)}
//           className="w-full border rounded-md p-2 mt-2"
//           placeholder="Enter primary care physician's name"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 font-semibold">Medical Conditions</label>
//         <textarea
//           value={medicalConditions}
//           onChange={(e) => setMedicalConditions(e.target.value)}
//           className="w-full border rounded-md p-2 mt-2"
//           rows={4}
//           placeholder="List any medical conditions"
//         />
//       </div>
//       <button
//         onClick={handleUpdate}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//       >
//         Update Profile
//       </button>
//     </div>
//   );
// };

// const PrivacySettings: React.FC = () => {
//   const [twoFactorAuth, setTwoFactorAuth] = useState(false);
//   const [profileVisibility, setProfileVisibility] = useState('public');
//   const [dataSharing, setDataSharing] = useState('no');

//   const handleToggleTwoFactorAuth = () => {
//     setTwoFactorAuth(!twoFactorAuth);
//   };

//   const handleVisibilityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setProfileVisibility(e.target.value);
//   };

//   const handleDataSharingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setDataSharing(e.target.value);
//   };

//   return (
//     <div className="p-6 bg-white shadow rounded-lg mt-6">
//       <h2 className="text-2xl font-extrabold mb-4">Privacy Settings</h2>
//       <hr className="my-4 border-gray-300" />
//       <div className="flex items-center mb-4">
//         <input
//           type="checkbox"
//           checked={twoFactorAuth}
//           onChange={handleToggleTwoFactorAuth}
//           className="mr-2"
//           title="Enable Two-Factor Authentication"
//         />
//         <label className="text-gray-700 font-semibold">Enable Two-Factor Authentication</label>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 font-semibold">Profile Visibility</label>
//         <select
//           aria-label="Profile Visibility"
//           value={profileVisibility}
//           onChange={handleVisibilityChange}
//           className="w-full border rounded-md p-2 mt-2"
//         >
//           <option value="public">Public</option>
//           <option value="private">Private</option>
//           <option value="friends">Friends</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 font-semibold">Data Sharing Preferences</label>
//         <select
//           aria-label="Data Sharing Preferences"
//           value={dataSharing}
//           onChange={handleDataSharingChange}
//           className="w-full border rounded-md p-2 mt-2"
//         >
//           <option value="no">Do not share</option>
//           <option value="limited">Limited sharing</option>
//           <option value="full">Full sharing</option>
//         </select>
//       </div>
//       <p className="text-gray-600 text-sm">
//         Your privacy settings control who can see your profile and activities, as well as how your data is shared.
//       </p>
//     </div>
//   );
// };

// const NotificationPreferences: React.FC = () => {
//   const [emailNotifications, setEmailNotifications] = useState(true);
//   const [smsNotifications, setSmsNotifications] = useState(false);
//   const [pushNotifications, setPushNotifications] = useState(true);

//   const handleEmailToggle = () => {
//     setEmailNotifications(!emailNotifications);
//   };

//   const handleSmsToggle = () => {
//     setSmsNotifications(!smsNotifications);
//   };

//   const handlePushToggle = () => {
//     setPushNotifications(!pushNotifications);
//   };

//   return (
//     <div className="p-6 bg-white shadow rounded-lg mt-6">
//       <h2 className="text-2xl font-extrabold mb-4">Notification Preferences</h2>
//       <hr className="my-4 border-gray-300" />
//       <div className="flex items-center mb-4">
//         <input
//           type="checkbox"
//           checked={emailNotifications}
//           onChange={handleEmailToggle}
//           className="mr-2"
//           title="Enable Email Notifications"
//         />
//         <label className="text-gray-700 font-semibold">Enable Email Notifications</label>
//       </div>
//       <div className="flex items-center mb-4">
//         <input
//           type="checkbox"
//           checked={smsNotifications}
//           onChange={handleSmsToggle}
//           className="mr-2"
//           title="Enable SMS Notifications"
//         />
//         <label className="text-gray-700 font-semibold">Enable SMS Notifications</label>
//       </div>
//       <div className="flex items-center mb-4">
//         <input
//           type="checkbox"
//           checked={pushNotifications}
//           onChange={handlePushToggle}
//           className="mr-2"
//           title="Enable Push Notifications"
//         />
//         <label className="text-gray-700 font-semibold">Enable Push Notifications</label>
//       </div>
//       <p className="text-gray-600 text-sm">
//         Control the notifications you receive for account activity, health updates, and more.
//       </p>
//     </div>
//   );
// };

// const AccountSecurity: React.FC = () => {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleChangePassword = () => {
//     if (newPassword !== confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//     console.log('Changing password...');
//   };

//   return (
//     <div className="p-6 bg-white shadow rounded-lg mt-6">
//       <h2 className="text-2xl font-extrabold mb-4">Account Security</h2>
//       <hr className="my-4 border-gray-300" />
//       <div className="mb-4">
//         <label className="block text-gray-700 font-semibold">Current Password</label>
//         <input
//           type="password"
//           value={currentPassword}
//           onChange={(e) => setCurrentPassword(e.target.value)}
//           className="w-full border rounded-md p-2 mt-2"
//           placeholder="Enter current password"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 font-semibold">New Password</label>
//         <input
//           type="password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           className="w-full border rounded-md p-2 mt-2"
//           placeholder="Enter new password"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 font-semibold">Confirm New Password</label>
//         <input
//           type="password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           className="w-full border rounded-md p-2 mt-2"
//           placeholder="Confirm new password"
//         />
//       </div>
//       <button
//         onClick={handleChangePassword}
//         className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//       >
//         Change Password
//       </button>
//     </div>
//   );
// };

// const SettingsInterface: React.FC = () => {
//   return (
//     <div className="flex flex-col lg:flex-row">
//       <aside className="bg-gray-100 w-full lg:w-1/4 p-4">
//         <nav className="space-y-4">
//           <a href="#profile-management" className="block p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
//             <FaUserShield className="inline-block mr-2" /> Profile Management
//           </a>
//           <a href="#privacy-settings" className="block p-2 bg-green-500 text-white rounded-md hover:bg-green-600">
//             <FaLock className="inline-block mr-2" /> Privacy Settings
//           </a>
//           <a href="#notification-preferences" className="block p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
//             <FaCog className="inline-block mr-2" /> Notification Preferences
//           </a>
//           <a href="#account-security" className="block p-2 bg-red-500 text-white rounded-md hover:bg-red-600">
//             <FaUserShield className="inline-block mr-2" /> Account Security
//           </a>
//           <a href="#download-logs" className="block p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">
//             <FaFileDownload className="inline-block mr-2" /> Download Activity Logs
//           </a>
//         </nav>
//       </aside>
//       <main className="w-full lg:w-3/4 p-6">
//         <ProfileManagement />
//         <PrivacySettings />
//         <NotificationPreferences />
//         <AccountSecurity />
//       </main>
//     </div>
//   );
// };

// export default SettingsInterface;
