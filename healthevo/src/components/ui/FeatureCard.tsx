import React from 'react';
import { Box, Card, CardContent, Typography, Icon } from '@mui/material';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="m-4">
      <CardContent className="flex items-center">
        <Icon className="mr-4">{icon}</Icon>
        <Box>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
