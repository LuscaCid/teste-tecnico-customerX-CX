const express = require('express')
const EnsureAuth = require('../middleware/ensureAuth')
const ClientsControllers =  require('../controllers/ClientsControllers')
const clientsControllers = new ClientsControllers()
const clientsRoutes = express()

clientsRoutes.use(express.json())
clientsRoutes.use(EnsureAuth)

clientsRoutes.post('/create', clientsControllers.create)
clientsRoutes.get('/report', clientsControllers.report)
clientsRoutes.get('/insideinfo', clientsControllers.viewClientInfo)
module.exports = clientsRoutes