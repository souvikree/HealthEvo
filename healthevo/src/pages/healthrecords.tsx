import HealthRecordsOverview from '@/components/HealthRecords/HealthRecordsOverview';
import HealthTrends from '@/components/HealthRecords/HealthTrends';
import SearchFilter from '@/components/HealthRecords/SearchFilter';
import Sidebar from '@/components/UserDashboard/Sidebar';
import React from 'react';


const HealthRecordsPage: React.FC = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6">
                <div className="max-w-7xl mx-auto p-6">
                    <SearchFilter />
                    <HealthRecordsOverview />
                    <HealthTrends />
                </div>
            </main>
        </div>
    );
};

export default HealthRecordsPage;
