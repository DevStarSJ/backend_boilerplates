import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-kakao';
import { use } from 'passport';

@Injectable()
export class KakaoStrategy {
  constructor() {
    this.init();
  }
  init() {
    use(
      new Strategy(
        {
          clientID: process.env.KAKAO_REST_API_KEY,
          clientSecret: '',
          callbackURL: 'http://localhost:3000/kakao/oauth',
        },
        async (
          accessToken: string,
          refreshToken: string,
          profile: any,
          done: any,
        ) => {
          const user = {};
          console.log(accessToken, refreshToken, profile)
          return done(null, user);
        },
      ),
    );
  }
}