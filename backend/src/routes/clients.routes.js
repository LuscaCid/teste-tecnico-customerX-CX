const express = require('express')

const clientsRoutes = express()

clientsRoutes.use(express.json())


module.exports = clientsRoutes