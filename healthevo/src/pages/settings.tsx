import React from 'react';
// import ProfileManagement from '../components/UserSettings/ProfileManagement';
// import PrivacySettings from '../components/UserSettings/PrivacySettings';
// import NotificationPreferences from '../components/UserSettings/NotificationPreferences';
// import AccountSecurity from '../components/UserSettings/AccountSecurity';
import Sidebar from '@/components/UserDashboard/Sidebar';
import SettingsInterface from '@/components/UserSettings/SettingsInterface';

const SettingsPage: React.FC = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6">
                <div className="container mx-auto p-6">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                        <SettingsInterface />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SettingsPage;
