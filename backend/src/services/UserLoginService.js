const AppError = require('../utils/AppError')
class UserLoginService{
    constructor(userRepository){
        this.userRepository = userRepository
    }
    execute = async ({email, password}) => {
        const emailExists = await this.userRepository.findByEmail(email)

        if(!emailExists) throw new AppError('E-mail ou senha inválidos')
    }
}

module.exports = UserLoginService