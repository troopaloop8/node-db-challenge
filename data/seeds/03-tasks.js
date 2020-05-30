
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {name: 'express server', project_id: 1, description: "make the server with express and node.js and set up the routes", notes: "dont confuse yourself with unclear names, stick to the snippets", completed: false},
        {name: 'database setup', project_id: 1, description: "make the migrations and seeds", notes: "be sure that the correct primary and foreign keys are linked together", completed: false},
        {name: 'endpoint creation', project_id: 1, description: "add endpoints for api calls", notes: "be sure to make explicit endpoints that are clear for each api call -- make it readable", completed: false},
        {name: 'make reducers', project_id: 2, description: "handle the crud for the state machine", notes: "distill the functions to their essence, and never mutate", completed: false},
        {name: 'make actions', project_id: 2, description: "chain promises to get the reducers working right", notes: "its PAYLOAD, not PALOAD", completed: false},
        {name: 'solve the oracle problem', project_id: 3, description: "gotta keep these oracles honest, thoughts???", notes: "perhaps some economic incentives and disincentives?", completed: false},
        {name: 'profit', project_id: 3, description: "find a way to monetize this", notes: "sell out to google or do our own IPO?", completed: false},
      ]);
    });
};
