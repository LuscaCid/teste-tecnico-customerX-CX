
exports.up = knex => knex.schema.createTable('clients', table => {
    table.increments('client_id').primary()
    table.text('full_name').notNullable()
    table.timestamp('created_at').default(knex.fn.now())
    
})


exports.down = knex => knex.schema.dropTable('clients')
