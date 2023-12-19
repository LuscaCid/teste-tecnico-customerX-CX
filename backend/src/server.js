require('express-async-errors')
require('dotenv').config()
const express = require('express')
const server = require('http')
const cors = require('cors')
const AppError = require('./utils/AppError')

const app = express()
app.use(cors())
const PORT =  process.env.PORT || 3333 



app.use((error, request, response, next) => {
    if(error instanceof AppError){
        return response.status(error.status).json({
            message: error.message,
            status : error.status
        })
    }
    console.error(error)
    return response.status(500).json({
        message : "internal Server Error"
    })

})
/**
 * server.createServer((req, resolve)=> {
    res.writeHead(200, {'Content-Type': 'text/plain'})
}, PORT, () => console.log('server is running on port', PORT))

 */
app.listen(PORT, () => console.log('server is running on port', PORT))