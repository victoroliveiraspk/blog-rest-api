export class Environment {
  static SERVER_PORT = process.env.SERVER_PORT || 3000;
  static DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/blog';
  static PASSWORD_ROUNDS = process.env.PASSWORD_ROUNDS || 10;
}
