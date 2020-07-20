export default class JwtPayload {
  username: string;
  id: number;
  exp?: number;
  iat?: number;
}