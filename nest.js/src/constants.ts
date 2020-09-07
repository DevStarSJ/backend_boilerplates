export default {
  SECRET_KEY: process.env.SECRET_KEY || 'secret',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1d',
  PASSWORD_SALT: process.env.PASSWORD_SALT || 10,
}