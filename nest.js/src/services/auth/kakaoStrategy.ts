import { Injectable } from '@nestjs/common'
import { Strategy } from 'passport-kakao'
import { use } from 'passport'
import AuthService from '../authService'

@Injectable()
export default class KakaoStrategy {
  constructor(private authService: AuthService) {
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
          console.log(accessToken, refreshToken, profile)
          const result = await this.authService.kakaoValidate(profile)
          done(null, result)
        },
      ),
    )
  }
}