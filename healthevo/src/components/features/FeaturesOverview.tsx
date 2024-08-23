import React from 'react';
import { Grid } from '@mui/material';
import FeatureCard from '../ui/FeatureCard';
import { AiOutlineHeart, AiOutlineEye, AiOutlineUser } from 'react-icons/ai';

const FeaturesOverview: React.FC = () => {
  return (
    <Grid container spacing={4} className="p-8">
      <Grid item xs={12} sm={4}>
        <FeatureCard 
          icon={<AiOutlineHeart />} 
          title="AI Diagnostics" 
          description="Get accurate diagnosis powered by advanced AI algorithms." 
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FeatureCard 
          icon={<AiOutlineEye />} 
          title="Real-Time Monitoring" 
          description="Monitor your health metrics in real-time, anywhere, anytime." 
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FeatureCard 
          icon={<AiOutlineUser />} 
          title="Personalized Treatment" 
          description="Receive treatment plans tailored specifically to your health needs." 
        />
      </Grid>
    </Grid>
  );
};

export default FeaturesOverview;
