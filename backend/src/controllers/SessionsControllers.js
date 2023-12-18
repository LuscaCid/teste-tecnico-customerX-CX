const {sign, verify} = require('jsonwebtoken')
const UserLoginService = require('../services/UserLoginService')
const UserRepository = require('../repositories/UserRepository')
const userRepository = new UserRepository()
class SessionsControllers{

    login = async (request, response) => {
        const {email, password} = request.body

        const userLoginService = new UserLoginService(userRepository)
        
        userLoginService.execute({email, password})


    }
    register = async (request, response) => {

    }
}
module.exports = SessionsControllers