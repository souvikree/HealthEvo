import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { Typography } from '@mui/material';
import VideoTestimonialCard from '../ui/VideoTestimonialCard';

const testimonials = [
  {
    name: 'Avinash Kr',
    title: 'Co-Founder at xyz',
    testimonial: 'Like this video and ask your questions in the comment section, don\'t forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.',
    imageUrl: '/images/avinash.jpg',
    rating:2, // Replace with actual image path
  },
  {
    name: 'Bharat Kunal',
    title: 'Manager at xyz',
    testimonial: 'Like this video and ask your questions in the comment section, don\'t forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.',
    imageUrl: '/images/bharat.jpg', // Replace with actual image path
    rating:1,
  },
  {
    name: 'Virat Kunal',
    title: 'Manager at xyz',
    testimonial: 'Like this video and ask your questions in the comment section, don\'t forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.',
    imageUrl: '/images/bharat.jpg', // Replace with actual image path
    rating:4,
  },
  
  {
    name: 'Prabhakar D',
    title: 'Founder / CEO at xyz',
    testimonial: 'Like this video and ask your questions in the comment section, don\'t forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.',
    imageUrl: '/images/prabhakar.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with actual video URL
    rating:5,
  },
];

const Testimonials: React.FC = () => {
  const textTestimonials = testimonials.filter((t) => !t.videoUrl);
  const videoTestimonials = testimonials.filter((t) => t.videoUrl);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-6">
      <Typography variant="h5" className="text-indigo-700 font-extrabold mb-12 mt-8 text-center">
        🗣️ What Our Clients Are Saying
      </Typography>
      <div className="container mx-auto">
        {/* Section for Text Testimonials */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {textTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              testimonial={testimonial.testimonial}
              imageUrl={testimonial.imageUrl}
              rating={testimonial.rating}
            />
          ))}
        </div>

        {/* Section for Video Testimonials */}
        <div className="flex flex-wrap justify-center gap-8">
          {videoTestimonials.map((testimonial, index) => (
            <VideoTestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              videoUrl={testimonial.videoUrl ?? ''}
              imageUrl={testimonial.imageUrl}
              rating={ testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
