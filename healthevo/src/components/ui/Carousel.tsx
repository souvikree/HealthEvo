// src/components/ui/Carousel.tsx
import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

interface CarouselProps {
  items: { text: string; author: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <ResponsiveCarousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      interval={5000}
      className="text-gray-800"
    >
      {items.map((item, index) => (
        <div key={index} className="text-center p-4">
          <p className="text-lg italic">&quot;{item.text}&quot;</p>
          <p className="mt-2 font-semibold">- {item.author}</p>
        </div>
      ))}
    </ResponsiveCarousel>
  );
};

export default Carousel;
