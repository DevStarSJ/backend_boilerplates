import { Injectable } from '@nestjs/common'
import { Strategy } from 'passport-facebook'
import { use } from 'passport'
import AuthService from '../authService'

@Injectable()
export default class FacebookStrategy {
  constructor(private authService: AuthService) {
    this.init()
  }
  init() {
    use(
      new Strategy(
        {
          clientID: process.env.FACEBOOK_APP_ID,
          clientSecret: process.env.FACEBOOK_APP_SECRET,
          callbackURL: `${process.env.SERVER_URL}/auth/facebook/redirect`,
          profileFields: ['id', 'displayName', 'photos', 'email']
        },
        async (
          accessToken: string,
          refreshToken: string,
          profile: any,
          done: any,
        ) => {
          console.log(accessToken, refreshToken, profile)
          const result = await this.authService.facebookValidate(profile)
          done(null, result)
        },
      ),
    )
  }
}