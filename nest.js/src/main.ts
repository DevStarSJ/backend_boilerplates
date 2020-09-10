import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config()
// .env 파일에 영향을 받는 코드들은 이후에 선언되어야 함

require('newrelic')
import { Loggly } from 'winston-loggly-bulk'
// const Loggly = require('winston-loggly-bulk').Loggly
import winston from 'winston'
import morgan from 'morgan'
import expressWinston from 'express-winston'

const logger = expressWinston.logger({
  transports: [
    new Loggly({
      token: process.env.LOGGLY_KEY || '',
      subdomain: 'genoplan',
      tags: ['NestJS'],
      json: true
    }),
    new winston.transports.Console({ 
      level: 'info'
    })
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: true,
  expressFormat: true,
})
expressWinston.requestWhitelist.push('body')
expressWinston.responseWhitelist.push('body')

// logger.stream = {
//   write: (info) => {
//     logger.info(info)
//   }
// }

import log from './middlewares/log'
import { LoggingInterceptor } from './middlewares/logging.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  
  const options = new DocumentBuilder()
    .setTitle('API List')
    .setDescription('API description')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)

  // app.use(log)
  // app.useGlobalInterceptors(new LoggingInterceptor())

  // app.use(morgan('combined', { stream: {
  //   write: (info) => {
  //     logger.info(info)
  //   }
  // }}))
  app.use(logger)
  await app.listen(3000)
}
bootstrap()
