
exports.up = knex => knex.schema.createView('clients_contacts', view => {
    view.columns(['full_name', 'address', 'full_contact_name'])
    view.as(knex('clients')
    .select('*')
    .innerJoin('contacts', 'clients.client_id', '=', 'client_owner_id' )
    .innerJoin('emails as e', 'clients.client_id', '=', 'e.FK_client_id')
    )
})


exports.down = knex => knex.schema.dropView('clients_contacts')
