const knex = require('../database/knex')
const {compare, hash} = require('bcryptjs')
const {sign} = require('jsonwebtoken')
const AuthConfig = require('../configs/AuthConfig')

class UserRepository{//tratativa do banco de dados

    findByEmail = async (email) => {
        const response = await knex('users')
        .where({email})
        .first()
        .then((data)=> {
            console.log('succcess at query')
            return data
        })
        .catch((e) => console.error(e))

        return response //if undefined, wrong email, else, returns the user
    }

    checkPassword = async ({user , password}) => {//sending the user and the password that he put in form
        //user its a object that contains all user info like the password
        console.log(user)
        const checkIsValid = await compare(password, user.password)
        //first the password who became from frontend and at least, the password in db thats is a giant hash
        console.log(checkIsValid)

        return checkIsValid   
    }

    signIn = async (user) => {

        const {secret, expiresIn} = AuthConfig.jwt

        const token = sign({}, secret, {
            subject : String(user.id),
            expiresIn
        })
        return token
    }

    signUp = async ({username, password, email}) => {
        await knex('users')
        .insert({
            username,
            email,
            password
        })
        .then((id) =>{
            console.log('inserted with success')
            return id 
        })
        .catch(e => {
            console.error(e)
        })
    }

    
}

module.exports = UserRepository