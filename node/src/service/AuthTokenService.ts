import JwtPayload from '../type/JwtPayload';
import JwtService from './JwtService';
import { User } from '../entity/User';
import { getManager } from 'typeorm';

export default class AuthTokenService {
    public static encode(payload: JwtPayload): string {
        try {
          const jwtInfo = {
            username: payload.username,
            id: payload.id
          }
            return JwtService.createToken(jwtInfo);
        } catch (error) {
          throw new Error('AuthToken encode error' + error.message);
        }
    }

    public static async getUser(authToken: string) {
      const tokens = authToken.split(' ');
      if (tokens.length != 2) throw new Error('AuthToken is not validate.')

      const payload = JwtService.decodeToken(tokens[1]);

      const user = await getManager().getRepository(User).findOne(payload.id);
      return user
    }
}