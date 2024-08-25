import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Ensure this is imported
import VideoCall from '@/components/Telemedicine/VideoCall';

test('renders video call controls', () => {
  render(<VideoCall />);
  const startButton = screen.getByText(/Start Call/i);
  expect(startButton).toBeInTheDocument(); // This should work now
});
