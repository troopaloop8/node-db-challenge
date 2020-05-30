// Update with your config settings.

const path = require('path');
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/projects.db3'
    },
    migrations: {
      directory: path.resolve('data', 'migrations')
    },
    seeds: {
      directory: path.resolve('data', 'seeds')
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
      },
    },
  },
}