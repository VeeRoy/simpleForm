const { Sequelize, DataTypes } = require('sequelize')

const config = require('../config/keys')

const sequelize = new Sequelize(
    config.DB_NAME,
    config.DB_USER,
    config.DB_PASSWORD,
    {
        host: config.DB_HOST,
        dialect: config.DB_DIALECT
    }
)

sequelize.authenticate()
    .then(() => {
        console.log('working fine')
    }).catch(err => {
        console.log(err)
    })

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.user = require('./schema')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('sync successful')
    }).catch(err => {
        console.log(err)
    })

module.exports = db   