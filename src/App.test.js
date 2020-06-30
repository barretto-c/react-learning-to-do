import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Track your TODOs', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Track your TODOs/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Enter New TODO/i);
  expect(linkElement).toBeInTheDocument();
});
