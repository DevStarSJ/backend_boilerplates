import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import constants from '../../constants'
import { User } from 'src/models/user'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: constants.SECRET_KEY,
    })
  }

  async validate(payload: any): Promise<any> {
    return await User.findOne(payload.userId)
  }
}
