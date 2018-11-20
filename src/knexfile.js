/**
 * Database configuration.
 */
module.exports = {
  client: 'pg',
  connection: {
    port: 5432,
    host: 'localhost',
    user: 'postgres',
    password: 'admin@123',
    database: 'teachjs',
    charset: 'utf8'
  },
  migrations: {
    tableName: 'migrations'
  }
};
