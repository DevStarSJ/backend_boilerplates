import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'

dotenv.config()

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

  await app.listen(3000)
}
bootstrap()
