import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-line2';
import { use } from 'passport';

@Injectable()
export class LineStrategy {
  constructor() {
    this.init();
  }
  init() {
    use(
      new Strategy(
        {
          channelID: process.env.LINE_CHANNEL_ID,
          channelSecret: process.env.LINE_CHANNEL_SECRET,
          callbackURL: 'http://localhost:3000/line/callback',
          session: false,
          // scope: ['profile', 'openid'],
          // botPrompt: 'normal',
          // uiLocales: 'en-US',
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