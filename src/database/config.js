const config = require('dotenv') 

config.config()
const MYSQL_URL = process.env.MYSQL_URL || 'mysql://root:vngg54EYazdLAy21eSJq@containers-us-west-149.railway.app:6515/railway'
const PORT = process.env.PORT || 1200
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_PORT = process.env.DB_PORT || 3306
const DB_USER = process.env.DB_USER || 'root'
const DB_PASS = process.env.DB_PASS || 'root'
const DB_NAME = process.env.DB_NAME || 'dbtestworld'
const EMAIL = process.env.EMAIL || 'nehemiashuaman360@gmail.com'
const PASSWORD= process.env.PASSWORD || 'kwjqezyhgoqvbtrk'

module.exports = {
    MYSQL_URL: MYSQL_URL,
    PORT: PORT,
    DB_HOST: DB_HOST,
    DB_PORT: DB_PORT,
    DB_USER: DB_USER,
    DB_PASS: DB_PASS,
    DB_NAME: DB_NAME,
    EMAIL: EMAIL,
    PASSWORD: PASSWORD

}