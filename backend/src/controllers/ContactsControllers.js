const knex = require('../database/knex')

class ContactsControllers {

    createContact = async (request, response) => {
        const {full_contact_name, emails, phones} = request.body
        const {client_id} = request.query
        const [contact_id] = await knex('contacts')
        .insert({full_contact_name, client_owner_id : client_id})
        .then(data => {
            console.log('ok')
            return data
        })
        .catch(e => console.error(e))
        
        let emailsInsert = null
        if(emails.length > 0){
            emailsInsert = emails.map(email => {
                return {
                    address : email,
                    FK_client_id : contact_id
                }
            })
        }
        await knex('emails')
        .insert(emailsInsert)
        .then(() => console.log('inserted with success'))
        .catch(e => console.error(e))

        let phonesInsert = null

        if(phones.length > 0){
            phonesInsert = emails.map(email => {
                return {
                    address : email,
                    FK_client_id : contact_id
                }
            })
        }
        await knex('phones')
        .insert(phonesInsert)
        .then(() => console.log('inserted with success'))
        .catch(e => console.error(e))

        return response.status(201).json(contact_id)

    }
}
module.exports = ContactsControllers