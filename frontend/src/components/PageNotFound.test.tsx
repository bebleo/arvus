import React from 'react';
import { render, screen } from '@testing-library/react';
import PageNotFound from './PageNotFound';

test("Ensure that Page Not Found renders", () => {
    render(<PageNotFound />);
    const linkelement = screen.getByText(/homepage/i);
    expect(linkelement).toBeInTheDocument();
});
