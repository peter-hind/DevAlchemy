/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('ingredients_ingadj', (table) => {
    table.integer('ingadj_id').references('ingredients_adjectives.ingadj_id')
    table.integer('ingredient_id').references('ingredients.ingredients_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('ingredients_adjectives')
}
