import { rest } from 'msw';
import { indices, chart } from './data/data'

export const handlers = [
  rest.get("./data/data.json", (req,res,ctx) => {
    return res(
      ctx.status(200),
      ctx.json(indices)
    )
  }),
  rest.get("./data/chart.json", (req, res, ctx) => {
    console.log("In mock chart data handler.")
    return res(
      ctx.status(200),
      ctx.json(chart)
    )
  })
]
