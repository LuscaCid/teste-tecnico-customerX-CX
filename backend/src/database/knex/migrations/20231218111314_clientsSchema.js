
exports.up = knex => knex.schema.createTable('clients', table => {
    table.increments('client_id').primary()
    table.text('full_name').notNullable()
    table.integer('FK_registered_by').references('id').inTable('users')//foreign key to link the user that created
    table.timestamp('created_at').default(knex.fn.now())
    
})

exports.down = knex => knex.schema.dropTable('clients')


