import { Injectable } from '@nestjs/common'
import { Strategy } from 'passport-naver'
import { use } from 'passport'
import AuthService from '../authService'

@Injectable()
export default class NaverStrategy {
  constructor(private authService: AuthService) {
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
          console.log(accessToken, refreshToken, profile)
          const result = await this.authService.naverValidate(profile)
          done(null, result)
        },
      ),
    )
  }
}
