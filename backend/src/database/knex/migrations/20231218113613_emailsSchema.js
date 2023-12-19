
exports.up = knex => knex.schema.createTable('emails', table => {
    table.increments('email_id').primary()
    table.text('address').notNullable()
    table.integer('FK_client_id').references('client_id').inTable('clients')//foreign key to client
})

exports.down = knex => knex.schema.dropTable('emails')
