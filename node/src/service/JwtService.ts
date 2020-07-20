import jwt = require('jsonwebtoken');
import JwtPayload from '../type/JwtPayload';

export default class JwtService {
    private static secretKey: string = process.env.SECRET_KEY || '80998746e938c7ae390422fbe8f83a8c5df5233fd25afd910dff8368f44659866960d30e10eb7efe444ca54b9c96fbf23a49751deff4e6d120141cf5dafb2d06';
    private static jwtExpiresIn: string = process.env.JWT_EXPIRES_IN || '1d'

    public static decodeToken(token: string): JwtPayload {
        try {
            const decoded = jwt.verify(token, this.secretKey) as JwtPayload;
            return decoded;
        } catch (error) {
          throw new Error('JWT decode error' + error.message);
        }
    }

    public static createToken(jwtInfo: JwtPayload): string {
        return jwt.sign(jwtInfo, this.secretKey, { expiresIn: this.jwtExpiresIn });
    }
}