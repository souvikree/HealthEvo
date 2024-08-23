// src/components/common/FeaturesOverview.tsx
import React from 'react';
import { FaHeartbeat, FaBrain, FaVideo } from 'react-icons/fa';

const KeyFeatures: React.FC = () => {
  return (
    <div className="py-12  bg-gradient-to-b from-blue-100 to-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">✨Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <FaHeartbeat className="mx-auto text-4xl text-blue-500" />
            <h3 className="mt-4 text-xl font-medium">Personalized Health Recommendations</h3>
          </div>
          <div>
            <FaBrain className="mx-auto text-4xl text-blue-500" />
            <h3 className="mt-4 text-xl font-medium">Predictive Analytics</h3>
          </div>
          <div>
            <FaVideo className="mx-auto text-4xl text-blue-500" />
            <h3 className="mt-4 text-xl font-medium">Telemedicine</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
