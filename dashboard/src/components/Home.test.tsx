import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test("Ensure page renders", () => {
    render(<Home />);
    const title = screen.getByText(/bebleo/i);
    expect(title).toBeInTheDocument();
});
