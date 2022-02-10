import { render, screen } from '@testing-library/react';
import App from './App';
import List from './App'

test('renders learn react link', () => {
  render(<List />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
