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
  req.on('end', () => {
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
      response: {
        headers: res.getHeaders(),
        status: res.statusCode,
        // body: res.getBody()
      },
    }
    console.log(logData)
    // console.log(res)

    const oldWrite = res.write
    const oldEnd = res.end
    const chunks = []

    res.write = (...restArgs) => {
      chunks.push(Buffer.from(restArgs[0]))
      oldWrite.apply(res, restArgs)
      return true
    }
  
    res.end = (...restArgs) => {
      if (restArgs[0]) {
        chunks.push(Buffer.from(restArgs[0]))
      }
      const body = Buffer.concat(chunks).toString('utf8')
  
      console.log({
        time: new Date().toUTCString(),
        fromIP: req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress,
        method: req.method,
        originalUri: req.originalUrl,
        uri: req.url,
        requestData: req.body,
        responseData: body,
        referer: req.headers.referer || '',
        ua: req.headers['user-agent']
      })
  
      console.log(body)
      oldEnd.apply(res, restArgs)
    }
  
    winston.log('info', logData)
  })
  

	next()
}
