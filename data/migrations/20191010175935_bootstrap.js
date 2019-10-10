
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 50)
         .notNullable()
         .unique();
      tbl.string('steps', 100)
         .notNullable();
  })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name', 50)
           .notNullable()
           .unique(); 
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })      
};

exports.down = function(knex) {
  
};
