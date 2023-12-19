
exports.up = knex => knex.schema.createTable('phones', table => {
    table.increments('id').primary()
    table.text('number').notNullable().primary()
    table.integer('owner_id').references('client_id').inTable('clients')
})


exports.down = knex => knex.schema.dropTable('phones')
