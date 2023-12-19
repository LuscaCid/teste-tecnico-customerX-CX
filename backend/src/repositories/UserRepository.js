const knex = require('../database/knex')
const {compare, hash} = require('bcryptjs')
const {sign} = require('jsonwebtoken')
const AuthConfig = require('../configs/AuthConfig')

class UserRepository{//tratativa do banco de dados

    findByEmail = async (email) => {
        const response = await knex('users')
        .where({email})
        .first()

        return response //if undefined, wrong email, else, returns the user
    }

    checkPassword = async ({user , password}) => {//sending the user and the password that he put in form
        const checkIsValid = await compare(user.password, password)

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
    
}

module.exports = UserRepository