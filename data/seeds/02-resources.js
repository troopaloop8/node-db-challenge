
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'The Spice', description: "he who holds the spice, holds the key to the universe"},
        {name: 'A Linux machine built from the scraps of a collection of dead laptops', description: "the fraken-top, does its job surprisingly well"},
        {name: 'Joey the intern', description: "gets us coffee and takes the brunt of the jokes"},
        {name: 'A bag full of cash', description: "for... reasons"}
      ]);
    });
};
