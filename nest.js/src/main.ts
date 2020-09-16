import dotenv from 'dotenv'
dotenv.config()

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app'
import cors from 'cors'
import bodyParser from 'body-parser'
import applySwagger from './middlewares/swaggerMiddleware'

import { logger, errorLogger } from './middlewares/loggerMiddleware'
import { SentryInterceptor } from './middlewares/sentryInterceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  applySwagger(app)

  app.use(logger)
  app.use(errorLogger)
  app.useGlobalInterceptors(new SentryInterceptor())
  
  await app.listen(3000)
}
bootstrap()
