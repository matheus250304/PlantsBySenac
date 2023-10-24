const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  /* SQLite */
  //dialect: 'mariadb',
  //storage: './db.sqlite',

  /* MySQL / MariaDB */
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
}
