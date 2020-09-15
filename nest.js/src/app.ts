import {Module} from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { PassportModule } from '@nestjs/passport'
import { GraphQLModule } from '@nestjs/graphql'
import jwtModule from './modules/jwtMoudle'
import services from './services'
import resolvers from './graphql/resolvers'
import models from './models'
import controllers from './controllers'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature(models),
    PassportModule,
    jwtModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
    }),
  ],
  providers: [ ...resolvers, ...services],
  controllers: controllers
})
export class AppModule {
  constructor(private connection: Connection) {}
}
