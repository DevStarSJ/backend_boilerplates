require('newrelic')
import { Loggly } from 'winston-loggly-bulk'
import winston from 'winston'
import expressWinston from 'express-winston'

expressWinston.requestWhitelist.push('body')
expressWinston.responseWhitelist.push('body')

const option = {
  transports: [
    new Loggly({
      token: process.env.LOGGLY_KEY || '',
      subdomain: 'genoplan',
      tags: ['NestJS'],
      json: true
    }),
    // new winston.transports.Console({ 
    //   level: 'info'
    // })
  ],
  format: winston.format.json(),
  meta: true,
  expressFormat: true,
}

export const logger = expressWinston.logger(option)
export const errorLogger = expressWinston.errorLogger(option)
