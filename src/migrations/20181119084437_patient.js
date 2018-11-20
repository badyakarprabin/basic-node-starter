/**
 *
 * @param {object} knex
 * @param Promise
 */
exports.up = function(knex, Promise) {
    return knex.schema.createTable('patients', table => {
      table.increments('id').primary();
      table.text('name').notNullable();
      table
      .integer('department_id')
      .notNullable()
      .references('id')
      .inTable('departments');
    });
  };
  

  /**
   *
   * @param {Object} knex
   * @param {*} Promise
   */
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('patients');
  };
  