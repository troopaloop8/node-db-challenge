
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'SQLite3 Database Project', description: "Make an entire express server using sqlite3 and knex from scratch to keep track of projects", completed: false},
        {name: 'React-Redux Project', description: "Make some fancy state machine to keep track of smurfs, of all things", completed: false},
        {name: 'The Oracle', description: "Solving this problem once and for all", completed: false}
      ]);
    });
};
