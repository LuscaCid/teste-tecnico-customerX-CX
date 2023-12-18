const {sign, verify} = require('jsonwebtoken')

class SessionsControllers{

    login = async (request, response) => {
        const {email, password} = request.body

        const userEmail = await knex
    }
    register = async (request, response) => {

    }
}
module.exports = SessionsControllers