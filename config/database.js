module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'strapi-database.cftby7cputh3.us-east-2.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', '5432'),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'youssef'),
        password: env('DATABASE_PASSWORD', 'DB#dmin123456'),
      },
      options: {
        ssl: false,
      },
    },
  },
});
 