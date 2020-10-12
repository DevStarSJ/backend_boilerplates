import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { SocialAuth } from 'src/models/socialAuth'
import constants from '../constants'
import { User } from '../models/user'

@Injectable()
export default class AuthService {
  constructor(
    private jwtService: JwtService,
  ) {}

  encryptPassword(plainText: string) {
    return bcrypt.hashSync(plainText, constants.PASSWORD_SALT)
  }

  verifyPassword(user: User, plainPassword: string) {
    return bcrypt.compareSync(plainPassword, user.password)
  }

  getToken(user: User): string {
    const payload = {
      email: user.email,
      userId: user.id
    }
    const token = this.jwtService.sign(payload)
    return token
  }

  async googleValidate(profile: any) {
    const service = 'google'
    const serviceId = profile.id
    const email = profile.emails[0].value
    return await this.socialValidate(service, serviceId, email)
  }

  private async socialValidate(service, serviceId, email) {
    const socialAuth = await SocialAuth.findOne({ where: {serviceId}})
    console.log(socialAuth)
    const result = { 
      type: 'signIn',
      email,
      service
    }

    let user
    if (socialAuth) { // Sign In

      console.log('sign_in')
      user = await socialAuth.user
    } else { // Sign On
      console.log('sign_on')
      user = new User(email)
      await user.save()
      const newSocialAuth = new SocialAuth(user.id, service, serviceId)
      await newSocialAuth.save()
      result.type = 'signOn'
    }
    result['token'] = this.getToken(user)
    return result
  }
}
