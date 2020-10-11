import { Injectable } from '@nestjs/common'
import { Strategy } from 'passport-line2'
import { use } from 'passport'

@Injectable()
export default class LineStrategy {
  constructor() {
    this.init()
  }
  init() {
    use(
      new Strategy(
        {
          channelID: process.env.LINE_CHANNEL_ID,
          channelSecret: process.env.LINE_CHANNEL_SECRET,
          callbackURL: `${process.env.SERVER_URL}/auth/line/redirect`,
          session: false,
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