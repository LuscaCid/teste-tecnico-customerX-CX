const AppError = require('../../utils/AppError')

class UserLoginService{
    constructor(userRepository){
        this.userRepository = userRepository
    }
    execute = async ({email, password}) => {
        const user = await this.userRepository.findByEmail(email)

        if(!user) throw new AppError('E-mail ou senha inválidos')
        
        const validPassword = await this.userRepository.checkPassword({user, password})

        if(!validPassword) throw new AppError('E-mail ou senha inválidos', 401)
        //if all credentials its ok, the user can passes
        const token = await this.userRepository.signIn(user)

        return {user, token}//this will be returned to login control func and finnaly to frontend

    }
}

module.exports = UserLoginService