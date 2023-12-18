const AppError = require('../utils/AppError')
class UserLoginService{
    constructor(userRepository){
        this.userRepository = userRepository
    }
    execute = async ({email, password}) => {
        const user = await this.userRepository.findByEmail(email)

        if(!user) throw new AppError('E-mail ou senha inválidos')
        
        const validPassword = await this.userRepository.checkPassword({user, password})



    }
}

module.exports = UserLoginService