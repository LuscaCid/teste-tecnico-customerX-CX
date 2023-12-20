
exports.up = knex => knex.schema.createTable('contacts', table => {
    table.increments('contact_id').primary()
    table.integer('client_owner_id')
    .references('client_id')
    .inTable('clients')
    .onDelete("CASCADE")
    table.text('full_contact_name').notNullable()
    //emails that corresponse at the email table
    //phones that corresponse at the phones table with fk
})

exports.down = knex => knex.schema.dropTable('contacts')
