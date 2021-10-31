import { render, screen } from '@testing-library/react';
import About from './About';

test("Ensure page renders", () => {
    render(<About />);
    const title = screen.getByText(/about/i);
    expect(title).toBeInTheDocument();
});
