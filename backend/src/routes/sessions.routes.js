const express = require('express')
const sessionsRoutes = express()

sessionsRoutes.use(express.json())

sessionsRoutes.post('/login')//sessionsControllers
sessionsRoutes.post('/register')
module.exports = sessionsRoutes