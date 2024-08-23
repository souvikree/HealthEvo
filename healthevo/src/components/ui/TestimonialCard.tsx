import React from 'react';
import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';

interface TestimonialCardProps {
  name: string;
  testimonial: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, testimonial, imageUrl }) => {
  return (
    <Card className="m-4">
      <CardContent className="flex items-center">
        <Avatar src={imageUrl} className="mr-4" />
        <Box>
          <Typography variant="body1">{testimonial}</Typography>
          <Typography variant="subtitle2" color="textSecondary">- {name}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
