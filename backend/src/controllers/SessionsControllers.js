const {sign, verify} = require('jsonwebtoken')
const UserLoginService = require('../services/userServices/UserLoginService')
const UserRegisterService = require('../services/userServices/UserRegisterService')
const UserRepository = require('../repositories/UserRepository')
const userRepository = new UserRepository()
class SessionsControllers{

    login = async (request, response) => {
        const {email, password} = request.body

        const userLoginService = new UserLoginService(userRepository)
        
        const {user, token} = await userLoginService.execute({email, password})
        return response.status(200).json({user, token})
    }
    register = async (request, response) => {
        const {username, email, password} = request.body

        const userRegisterService = new UserRegisterService(userRepository)

        const newUser = await userRegisterService.execute({username, email, password})

        return response.json(newUser)
    }
}
module.exports = SessionsControllers