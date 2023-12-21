const sessionsRoutes = require('./sessions.routes')
const clientsRoutes = require('./clients.routes')
const contactsRoutes = require('./contacts.routes')
const express= require('express')
const Routes = express()
Routes.use(express.json())

Routes.use('/clients', clientsRoutes)
Routes.use('/sessions', sessionsRoutes) 
Routes.use('/contacts', contactsRoutes)
module.exports = Routes