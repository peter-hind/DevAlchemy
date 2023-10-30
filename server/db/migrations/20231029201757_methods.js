/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('methods', (table) => {
    table.increments('methods_id').primary()
    table.string('methods_name')
    table.string('methods_description')
    table.foreign('cauldron_id').references('cauldrons.cauldrons_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('methods')
}
