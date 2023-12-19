require('dotenv').config()

module.exports = {
    jwt : {
        secret : process.env.SECRET,
        expiresIn : "1d"
    }

}