import { Module } from '@nestjs/common';
import { GoogleController } from './google.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './google.strategy';
import { FacebookController } from './facebook.controller';
import { FacebookStrategy } from './facebook.strategy';
import { KakaoController } from './kakao.controller';
import { KakaoStrategy } from './kakao.strategy';
import { LineController } from './line.controller';
import { LineStrategy } from './line.strategy';
import { NaverController } from './naver.controller';
import { NaverStrategy } from './naver.strategy';

@Module({
  imports: [],
  controllers: [GoogleController, FacebookController, KakaoController, LineController, NaverController],
  providers: [AppService, GoogleStrategy, FacebookStrategy, KakaoStrategy, LineStrategy, NaverStrategy],
})
export class AppModule {}
