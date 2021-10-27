import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const texts = screen.getAllByText(/bebleo/i);
  for (let text of texts) {
    expect(text).toBeInTheDocument();
  }
});
