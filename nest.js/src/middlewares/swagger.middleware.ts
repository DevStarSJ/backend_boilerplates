import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

const options = new DocumentBuilder()
  .setTitle('API List')
  .setDescription('API description')
  .setVersion('1.0')
  .addBearerAuth(
    { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
    'access-token',
  )
  .build()

export default function (app) {
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)
}
