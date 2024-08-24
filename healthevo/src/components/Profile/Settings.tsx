import React from 'react';

const Settings: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-semibold mb-4">Settings</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Change Password</label>
                <input
                    type="password"
                    placeholder="New Password"
                    className="w-full border rounded-md p-2 mt-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Privacy Settings</label>
                <div className="flex items-center mt-2">
                    <input type="checkbox" className="mr-2" id="two-factor-auth" />
                    <label htmlFor="two-factor-auth">Enable Two-Factor Authentication</label>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Notification Preferences</label>
                <div className="flex items-center mt-2">
                    <input type="checkbox" className="mr-2" id="email-notifications" />
                    <label htmlFor="email-notifications">Receive email notifications</label>
                </div>
                <div className="flex items-center mt-2">
                    <input type="checkbox" className="mr-2" id="sms-notifications" />
                    <label htmlFor="sms-notifications">Receive SMS notifications</label>
                </div>
            </div>
        </div>
    );
};

export default Settings;
