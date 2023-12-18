const config = require('../../../knexfile')
const knex = require('knex')
const connection = knex(config.development)
module.exports = connection //knex connection to database, configs made at knexfile

