export class Environment {

  static SERVER_PORT = process.env.SERVER_POST || 3000;

  static DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/blog';

}
