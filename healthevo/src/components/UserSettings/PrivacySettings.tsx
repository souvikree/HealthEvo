import React, { useState } from 'react';

const PrivacySettings: React.FC = () => {
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);
    const [profileVisibility, setProfileVisibility] = useState('public');

    const handleToggleTwoFactorAuth = () => {
        setTwoFactorAuth(!twoFactorAuth);
    };

    const handleVisibilityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProfileVisibility(e.target.value);
    };

    return (
        <div className="p-6 ">
            <h2 className="text-2xl font-semibold mb-4">Privacy Settings</h2>
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    checked={twoFactorAuth}
                    onChange={handleToggleTwoFactorAuth}
                    className="mr-2"
                    title="Enable Two-Factor Authentication"
                />
                <label className="text-gray-700">Enable Two-Factor Authentication</label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Profile Visibility</label>
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
            <p className="text-gray-600 text-sm">
                Your privacy settings control who can see your profile and activities.
            </p>
        </div>
    );
};

export default PrivacySettings;
