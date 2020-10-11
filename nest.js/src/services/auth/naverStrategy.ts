import { Injectable } from '@nestjs/common'
import { Strategy } from 'passport-naver'
import { use } from 'passport'

@Injectable()
export default class NaverStrategy {
  constructor() {
    this.init()
  }
  init() {
    use(
      new Strategy(
        {
          clientID: process.env.NAVER_CLIENT_ID,
          clientSecret: process.env.NAVER_CLIENT_SECRET,
          callbackURL: `${process.env.SERVER_URL}/auth/naver/redirect`,
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
