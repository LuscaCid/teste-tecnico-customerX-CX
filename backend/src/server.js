require('express-async-errors')
require('dotenv').config()
const express = require('express')
const server = require('http')
const cors = require('cors')

const app = express()
app.use(cors())
const PORT =  process.env.PORT || 3333 




/**
 * server.createServer((req, resolve)=> {
    res.writeHead(200, {'Content-Type': 'text/plain'})
}, PORT, () => console.log('server is running on port', PORT))

 */
app.listen(PORT, () => console.log('server is running on port', PORT))