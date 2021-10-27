import { render, screen } from '@testing-library/react';
import Developer from './Developer';
// import * as httpclient from 'typed-rest-client/HttpClient'

test("Ensure developer article renders",
() => {
    render(<Developer />);
    const texts = screen.getAllByText(/developer/i)
    for (let text of texts) {
      expect(text).toBeInTheDocument();
    }
});

// test("Check links are up to date", async () => {
//     render(<Developer />);
//     const http = new httpclient.HttpClient(undefined);
//     const links = screen.queryAllByRole("link");
//     if (links != null) {
//       for (let link of links) {
//         const href = link.getAttribute("href");
//         let res = await http.get(href!);
//         expect(res.message.statusCode).toBe(200);
//       }
//     }
// });
