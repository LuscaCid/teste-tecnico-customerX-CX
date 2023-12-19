const {sign, verify} = require('jsonwebtoken')
const UserLoginService = require('../services/UserLoginService')
const UserRepository = require('../repositories/UserRepository')
const userRepository = new UserRepository()
class SessionsControllers{

    login = async (request, response) => {
        const {email, password} = request.body

        const userLoginService = new UserLoginService(userRepository)
        
        const {user, token} = await userLoginService.execute({email, password})
        return response.status(200).json()
    }
    register = async (request, response) => {

    }
}
module.exports = SessionsControllers