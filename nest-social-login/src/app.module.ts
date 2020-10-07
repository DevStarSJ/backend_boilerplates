import { Module } from '@nestjs/common';
import { GoogleController } from './google.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './google.strategy';
import { FacebookController } from './facebook.controller';
import { FacebookStrategy } from './facebook.strategy';
import { KakaoController } from './kakao.controller';
import { KakaoStrategy } from './kakao.strategy';

@Module({
  imports: [],
  controllers: [GoogleController, FacebookController, KakaoController],
  providers: [AppService, GoogleStrategy, FacebookStrategy, KakaoStrategy],
})
export class AppModule {}
