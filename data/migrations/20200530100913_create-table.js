
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.string('description', 255);
        tbl.boolean('completed').defaultTo(false).notNullable();
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable().unique();
        tbl.string('description', 255);
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 255).notNullable();
        tbl.string('notes', 255);
        tbl.boolean('completed').defaultTo(false).notNullable();
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects').onDelete('RESTRICT').onUpdate('CASCADE');
    })
    .createTable('project_resources', tbl => {
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects').onUpdate('CASCADE').onDelete('CASCADE');
        tbl.integer('resource_id').unsigned().notNullable().references('id').inTable('resources').onUpdate('CASCADE').onDelete('CASCADE');
        tbl.primary(["project_id", "resource_id"]);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
