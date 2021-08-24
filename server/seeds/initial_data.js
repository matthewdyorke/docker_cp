exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('checkpoint_db').del()
    .then(function () {
      // Inserts seed entries
      return knex('checkpoint_db').insert([
        {id: 1, first_column: 'Welcome to your fullstack app, served up Gary\'s way. From a database...'}
      ]);
    });
};