import React from 'react';
import { render, screen } from '@testing-library/react';
import { Copyright } from './Copyright';
import * as httpclient from 'typed-rest-client/HttpClient'

test("Ensure copyright renders",
() => {
    render(<Copyright />);
    const text = screen.getByText(/2021, James Warne/)
    expect(text).toBeInTheDocument();
})

// test("Check links are up to date", async () => {
//     render(<Copyright />);
//     const links = screen.getAllByRole("link");
//     let http = new httpclient.HttpClient(undefined);
//     for (let link of links) {
//         const href = link.getAttribute("href");
//         let res = await http.get(href!);
//         expect(res.message.statusCode).toBe(200);
//     }
// })