import React from 'react';
import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import { Star } from '@mui/icons-material'; // Importing star icon for ratings

interface TestimonialCardProps {
  name: string;
  title: string; // Adding a title for the testimonial author
  testimonial: string;
  imageUrl: string;
  rating: number; // Adding a rating prop to handle star ratings
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, title, testimonial, imageUrl, rating }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`text-xs ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <Box className="max-w-sm mx-auto mb-8">
      <Card className="p-6 bg-white shadow-lg rounded-lg text-center transform transition-transform duration-300">
        <Box className="flex justify-center">
          <Avatar 
            src={imageUrl} 
            className="w-24 h-24 rounded-full shadow-lg border-4 border-white" 
            alt={name}
          />
        </Box>
        <CardContent className="mt-4">
          <Box className="relative">
            <FormatQuote className="absolute left-0 top-0 text-gray-500 text-4xl transform -translate-x-4 -translate-y-4" />
            <Typography variant="body1" className="text-gray-700 font-medium font-sans leading-relaxed mb-4 pl-8 pr-8">
              {testimonial}
            </Typography>
          </Box>
          <Typography variant="h6" className="text-orange-600 font-mono font-bold">
            {name}
          </Typography>
          <Typography variant="subtitle2" className="text-gray-500 mb-2">
            {title}
          </Typography>
          {/* Rating Section */}
          <Box className="flex justify-center">
            {renderStars(rating)}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TestimonialCard;
