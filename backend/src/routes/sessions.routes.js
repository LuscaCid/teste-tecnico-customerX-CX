const express = require('express')
const sessionsRoutes = express()
const SessionsControllers = require('../controllers/SessionsControllers')
const sessionsControllers = new SessionsControllers()
sessionsRoutes.use(express.json())

sessionsRoutes.post('/login', sessionsControllers.login)//sessionsControllers
sessionsRoutes.post('/register', sessionsControllers.register)
module.exports = sessionsRoutes 