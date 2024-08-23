import React from 'react';
import { Grid } from '@mui/material';
import { AiOutlineHeart, AiOutlineEye, AiOutlineUser } from 'react-icons/ai';
import { MdHealthAndSafety, MdOutlineMonitorHeart, MdOutlinePersonalInjury } from 'react-icons/md';
import FeatureCard from '../ui/FeatureCard';

const FeaturesOverview: React.FC = () => {
  return (
    <Grid container spacing={4} className="p-8 bg-gradient-to-b from-blue-50 to-blue-100">
      <Grid item xs={12} sm={4}>
        <FeatureCard 
          icon={<MdHealthAndSafety className="text-blue-500 text-2xl" />} 
          title="AI Diagnostics 💉" 
          description="Get accurate diagnosis powered by advanced AI algorithms." 
          className="hover:bg-white hover:shadow-lg transition-all duration-300 ease-in-out"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FeatureCard 
          icon={<MdOutlineMonitorHeart className="text-green-500 text-2xl" />} 
          title="Real-Time Monitoring 🩺" 
          description="Monitor your health metrics in real-time, anywhere, anytime." 
          className="hover:bg-white hover:shadow-lg transition-all duration-300 ease-in-out"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FeatureCard 
          icon={<MdOutlinePersonalInjury className="text-red-500 text-2xl" />} 
          title="Personalized Treatment 🧬" 
          description="Receive treatment plans tailored specifically to your health needs." 
          className="hover:bg-white hover:shadow-lg transition-all duration-300 ease-in-out"
        />
      </Grid>
    </Grid>
  );
};

export default FeaturesOverview;
