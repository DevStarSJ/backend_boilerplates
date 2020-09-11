import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import applySwagger from './middlewares/swagger.middleware'

dotenv.config()
// .env 파일에 영향을 받는 코드들은 이후에 선언되어야 함

import { logger, errorLogger } from './middlewares/logger.middleware'
import { SentryInterceptor } from './middlewares/sentry.interceptor'

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
