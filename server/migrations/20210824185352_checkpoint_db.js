exports.up = function(knex) {
    return knex.schema.createTable('checkpoint_db', table=>{
        table.increments('id');
        table.string('first_column');
    })
  };
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('checkpoint_db');
};