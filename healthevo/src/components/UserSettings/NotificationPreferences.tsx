import React, { useState } from 'react';

const NotificationPreferences: React.FC = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);

    const handleEmailToggle = () => {
        setEmailNotifications(!emailNotifications);
    };

    const handleSmsToggle = () => {
        setSmsNotifications(!smsNotifications);
    };

    return (
        <div className=" p-6  mt-2">
            <h2 className="text-2xl font-semibold mb-4">Notification Preferences</h2>
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="email-notifications"
                    checked={emailNotifications}
                    onChange={handleEmailToggle}
                    className="mr-2"
                />
                <label htmlFor="email-notifications" className="text-gray-700">
                    Receive Email Notifications
                </label>

            </div>
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="sms-notifications" // Add an id attribute
                    checked={smsNotifications}
                    onChange={handleSmsToggle}
                    className="mr-2"
                />
                <label htmlFor="sms-notifications" className="text-gray-700">
                    Receive SMS Notifications
                </label>
            </div>
            <p className="text-gray-600 text-sm">
                Control how and when you receive notifications from our service.
            </p>
        </div>
    );
};

export default NotificationPreferences;
