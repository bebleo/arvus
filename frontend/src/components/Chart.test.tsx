import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { Chart } from './Chart';

const data = {
  "productID":"18100061",
  "title":"Commercial Software Price Index",
  "values":[
    {"geography":"Canada","refDate":"2020-03","value":119.3},
    {"geography":"Canada","refDate":"2020-04","value":119.4},
    {"geography":"Canada","refDate":"2020-05","value":119.3},
    {"geography":"Canada","refDate":"2020-06","value":117.3},
    {"geography":"Canada","refDate":"2020-07","value":117.4},
    {"geography":"Canada","refDate":"2020-08","value":116.4},
    {"geography":"Canada","refDate":"2020-09","value":119.3},
    {"geography":"Canada","refDate":"2020-10","value":118.4},
    {"geography":"Canada","refDate":"2020-11","value":117.8},
    {"geography":"Canada","refDate":"2020-12","value":116.5},
    {"geography":"Canada","refDate":"2021-01","value":116},
    {"geography":"Canada","refDate":"2021-02","value":116.2},
    {"geography":"Canada","refDate":"2021-03","value":115.1}]
};

// const mockServer = setupServer(
//   rest.get(
//     "./data/chart.json",
//     (req, res, ctx) => { return res(ctx.json(data)) }
//   )
// );

// beforeAll(() => { mockServer.listen() });
// afterEach(() => { mockServer.restoreHandlers() });
// afterAll(() => { mockServer.close() });

test("Assert that component renders", async () => {
  render( <Chart data={data.values} /> );
  const zero = await screen.getByText(/loading/i);
  expect(zero).toBeInTheDocument
});
