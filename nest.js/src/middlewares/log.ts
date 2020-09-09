import { Request, Response, NextFunction } from 'express'

import winston from 'winston'
import { Loggly } from 'winston-loggly-bulk'

winston.add(new Loggly({
  token: process.env.LOGGLY_KEY || '',
  subdomain: 'genoplan',
  tags: ['NestJS'],
  json: true
}))

export default function log(req: Request, res: Response, next: NextFunction) {
  const logData = {
    request: {
      hostname: req.hostname,
      path: req.path,
      method: req.method,
      headers: req.headers,
      params: req.params,
      query: req.query,
      body: req.body,
    },
    // response: {
    //   headers: res.getHeaders(),
    //   status: res.statusCode
    // },
  }
  console.log(logData)

  winston.log('info', logData)

	next()
}
