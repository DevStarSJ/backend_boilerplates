import { Injectable } from '@nestjs/common';
import * as FacebookTokenStrategy from 'passport-facebook';
import { use } from 'passport';

@Injectable()
export class FacebookStrategy {
  constructor() {
    this.init();
  }
  init() {
    use(
      new FacebookTokenStrategy(
        {
          clientID: process.env.FACEBOOK_APP_ID,
          clientSecret: process.env.FACEBOOK_APP_SECRET,
          callbackURL: 'http://localhost:3000/facebook/callback',
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