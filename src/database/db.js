const Sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const DBconnect = new Sequelize(
    process.env.LOCAL_DB_NAME,
    process.env.LOCAL_DB_USERNAME,
    process.env.LOCAL_DB_PASSWORD, {
        host: process.env.LOCAL_DB_HOST,
        dialect: 'mysql',
    }
)


module.exports = {DBconnect}