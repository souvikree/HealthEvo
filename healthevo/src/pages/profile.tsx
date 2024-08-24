import React from 'react';
import ProfileInfo from '../components/Profile/ProfileInfo';
// import ProfilePictureUpload from '../components/Profile/ProfilePictureUpload';
import Settings from '../components/Profile/Settings';
import Sidebar from '@/components/UserDashboard/Sidebar';

const ProfilePage: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {/* <ProfilePictureUpload /> */}
          <ProfileInfo />
        </div>
        {/* <div>
          <Settings />
        </div> */}
      </div>
      </div>
      </main>
    </div>
  );
};

export default ProfilePage;
