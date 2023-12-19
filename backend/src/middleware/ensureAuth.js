require('dotenv').config()
const {verify} = require('jsonwebtoken')
const AppError = require('../utils/AppError')
const AuthConfig = require('../configs/AuthConfig')

const EnsureAuth = async (request, response, next) =>{

    const authHeaders = request.headers.authorization

    if(!authHeaders)throw new AppError('jwt invalid')

    
    const [, token] = authHeaders.split(' ')//depois que o token é inserido la no front
    //em api.defaults.headers = `Bearer ${token}` 
    //pq o usuario quando faz login, o token é gerado e retornado pro front e inserido juntamente o com o 
    //objeto user que sofre um JSON.sringfy(user) 
    
    const {secret, expiresIn} = AuthConfig.jwt
    
    try{
        const {sub : user_id}  = verify(token, secret)
        request.user = {
            id : Number(user_id),
            expiresIn
        }
        return next()
    } catch{
        throw new AppError('invalid jwt')
    }
}   
module.exports = EnsureAuth