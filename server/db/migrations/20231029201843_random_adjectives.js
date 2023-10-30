/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('random_adjectives', (table) => {
    table.increments('randoms_id').primary()
    table.string('randoms_name')
    table.string('randoms_initial')
    table.integer('ingredient_id').references('ingredients.ingredients_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('random_adjectives')
}
