import {Module} from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { PassportModule } from '@nestjs/passport'
import jwtModule from './modules/jwtMoudle'
import services from './services'
import models from './models'
import controllers from './controllers'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature(models),
    PassportModule,
    jwtModule,
  ],
  providers: services,
  controllers: controllers
})
export class AppModule {
  constructor(private connection: Connection) {}
}
