/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('ingredients', (table) => {
    table.increments('ingredients_id').primary()
    table.string('ingredients_name')
    table.string('ingredients_description')
    table.string('ingredients_image_url')
    table.string('ingredients_hex_colour')
    table.foreign('cauldron_id').references('cauldrons.cauldrons_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('ingredients')
}
