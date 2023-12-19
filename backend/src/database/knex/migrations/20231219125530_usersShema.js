
exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.text('email').primary().notNullable()
    table.text('password').notNullable()
    table.text('username').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
})


exports.down = knex => knex.schema.dropTable('users')
