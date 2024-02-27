import { render, screen } from '@testing-library/react';
import BookingPage from './components/BookingPage';

test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const heading = screen.getByText("Booking Form");
  expect(heading).toBeInTheDocument();
});
