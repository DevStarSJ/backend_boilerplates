import { JwtModule } from '@nestjs/jwt'
import constants from '../constants'

const jwtModule = JwtModule.register({
  secret: constants.SECRET_KEY,
  signOptions: { expiresIn: constants.JWT_EXPIRES_IN },
})

export default jwtModule
