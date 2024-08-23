import React from 'react';
import { Box, Card, CardContent, Typography, Icon } from '@mui/material';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className }) => {
  return (
    <Card className={`m-4 rounded-lg  shadow ${className}`}>
      <CardContent className="flex items-center">
        <Icon className="mr-4">{icon}</Icon>
        <Box>
          <Typography variant="h6" className="text-xl font-bold font-mono   mb-2">{title}</Typography>
          <Typography variant="body2" className="text-gray-600 text-base font-medium ">{description}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
