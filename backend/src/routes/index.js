const sessionsRoutes = require('./sessions.routes')

const express= require('express')
const Routes = express

Routes.use('/sessions', sessionsRoutes) 