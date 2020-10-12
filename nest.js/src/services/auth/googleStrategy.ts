import { PassportStrategy } from '@nestjs/passport'
import { Strategy, VerifyCallback } from 'passport-google-oauth20'
import { Injectable } from '@nestjs/common'
import AuthService from '../authService'

@Injectable()
export default class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

  constructor(private authService: AuthService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: `${process.env.SERVER_URL}/auth/google/redirect`,
      scope: ['email', 'profile'],
      session: false,
    })
  }

  async validate (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    console.log(accessToken, refreshToken, profile)
    const result = await this.authService.googleValidate(profile)
    done(null, result)
  }
}