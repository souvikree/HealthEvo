import React from 'react';
import { Box, Typography, Card, Avatar } from '@mui/material';
import ReactPlayer from 'react-player';
import { Star } from '@mui/icons-material';

interface VideoTestimonialCardProps {
  name: string;
  title: string;
  videoUrl: string;
  imageUrl: string;
  rating: number; // Rating out of 5
}

const VideoTestimonialCard: React.FC<VideoTestimonialCardProps> = ({ name, title, videoUrl, imageUrl, rating }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`text-xs ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <Box className="max-w-4xl mx-auto mb-8 transform transition-transform duration-300 hover:scale-105">
      <Card className="relative p-6 w-[700px] h-[460px] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Avatar and Name */}
        <Box className="flex items-start mb-4">
          <Avatar
            src={imageUrl}
            className="w-24 h-24 rounded-full border-4 border-white"
            alt={name}
          />
          <Box className="ml-4 mt-2 flex flex-col justify-between">
            <Box>
              <Typography variant="h6" className="text-indigo-700 font-mono font-bold">
                {name}
              </Typography>
              <Typography variant="subtitle2" className="text-gray-500">
                {title}
              </Typography>
            </Box>
            <Box className="mt-1 flex items-center">
              <Typography variant="body2" className="text-gray-600 mr-2">
                Rating:
              </Typography>
              <Box className="flex">
                {renderStars(rating)}
              </Box>
            </Box>
          </Box>
        </Box>
        
        {/* Video Player */}
        <Box className="mb-4"> {/* Adjust margin to avoid overlap with Avatar */}
          <ReactPlayer
            url={videoUrl}
            className="rounded-lg overflow-hidden shadow-lg"
            width="650px" // Full width of the card
            height="300px" // Set height for the video player
            controls
          />
        </Box>

        {/* Rating Section */}
        
      </Card>
    </Box>
  );
};

export default VideoTestimonialCard;
