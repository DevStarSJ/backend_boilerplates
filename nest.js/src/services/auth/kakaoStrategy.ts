import { Injectable } from '@nestjs/common'
import { Strategy } from 'passport-kakao'
import { use } from 'passport'

@Injectable()
export default class KakaoStrategy {
  constructor() {
    this.init()
  }
  init() {
    use(
      new Strategy(
        {
          clientID: process.env.KAKAO_REST_API_KEY,
          clientSecret: '',
          callbackURL: `${process.env.SERVER_URL}/auth/kakao/redirect`,
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