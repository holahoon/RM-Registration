import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Remnant Ministry Registration', () => {
  render(<App />);
  const linkElement = screen.getByText(/Remnant Ministry Registration/i);
  expect(linkElement).toBeInTheDocument();
});
