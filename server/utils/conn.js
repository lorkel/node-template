const Sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

// model includes
const CommunicationModel = require('../models/template')

const conn = new Sequelize(process.env.DATABASE_URL);

conn
  .authenticate()
  .then(() =>   { console.log('Connection to database has been established successfully.'); })
  .catch(err => { console.error('Unable to connect to the content database:', err); });

// content / authoring tables
const Communication = CommunicationModel(conn, Sequelize)

// log tables will go here

module.exports = {
  Communication,
  // additional if needed
}

// reference
// https://www.codementor.io/@mirko0/how-to-use-sequelize-with-node-and-express-i24l67cuz
