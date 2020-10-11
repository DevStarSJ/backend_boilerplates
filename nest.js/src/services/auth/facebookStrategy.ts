import { Injectable } from '@nestjs/common'
import { Strategy } from 'passport-facebook'
import { use } from 'passport'

@Injectable()
export default class FacebookStrategy {
  constructor() {
    this.init()
  }
  init() {
    use(
      new Strategy(
        {
          clientID: process.env.FACEBOOK_APP_ID,
          clientSecret: process.env.FACEBOOK_APP_SECRET,
          callbackURL: `${process.env.SERVER_URL}/auth/facebook/redirect`,
        },
        async (
          accessToken: string,
          refreshToken: string,
          profile: any,
          done: any,
        ) => {
          const user = {}
          console.log(accessToken, refreshToken, profile)
          return done(null, user)
        },
      ),
    )
  }
}