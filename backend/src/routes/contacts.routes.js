const express = require('express')
const EnsureAuth = require('../middleware/ensureAuth')
const ContactsControllers =  require('../controllers/ContactsControllers')
const contactsControllers = new ContactsControllers()
const contactsRoutes = express()

contactsRoutes.use(express.json())
contactsRoutes.use(EnsureAuth)

contactsRoutes.post('/create', contactsControllers.createContact)

module.exports = contactsRoutes