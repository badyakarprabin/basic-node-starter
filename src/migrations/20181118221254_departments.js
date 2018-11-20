/**
 *
 * @param {object} knex
 * @param Promise
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('departments', table => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('description').notNullable();
    table
      .timestamp('created_at')
      .notNullable()
      .default(knex.raw('now()'));
  });
};

/**
 *
 * @param {Object} knex
 * @param {*} Promise
 */
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('departments');
};
