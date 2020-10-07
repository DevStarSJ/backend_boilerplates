import { Module } from '@nestjs/common';
import { GoogleController } from './google.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './google.strategy';
import { FacebookController } from './facebook.controller';
import { FacebookStrategy } from './facebook.strategy';

@Module({
  imports: [],
  controllers: [GoogleController, FacebookController],
  providers: [AppService, GoogleStrategy, FacebookStrategy],
})
export class AppModule {}
