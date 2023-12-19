const {hash} = require('bcryptjs')

const AppError = require('../../utils/AppError')
class UserRegisterService{
    constructor(userRepository){
        this.userRepository = userRepository
    }
    
    execute = async ({username, email, password}) => {
        //searching if this email is already in use
        const userExists = await this.userRepository.findByEmail(email)
        
        if(userExists)throw new AppError('E-mail já em uso', 401)

        const hashedPassword = await hash(password, 8)
        //if all is ok, register
        const newUser = await this.userRepository.signUp({username, password : hashedPassword, email})

        return newUser
    }   
}
module.exports = UserRegisterService