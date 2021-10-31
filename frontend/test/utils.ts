import { rest } from 'msw';
import { setupServer } from 'msw/node';

import indicesData from '../src/data/data.json'

const mockDataServer = setupServer(
  rest.get(
    '/data/indices.json',
    (req, res, ctx) => { return (res(ctx.json(indicesData))) }
  )
);
