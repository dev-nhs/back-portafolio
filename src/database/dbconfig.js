const mysql = require ('mysql2')
const dbconfig = require('./config')

const connection = mysql.createConnection(dbconfig.MYSQL_URL);

/* const connection = mysql.createConnection({

    host: dbconfig.DB_HOST,
    user: dbconfig.DB_USER,
    password:dbconfig.DB_PASS,
    database: dbconfig.DB_NAME
}) */

connection.connect((err) => {
    if (err) throw err;
    console.log('Conexión establecida con la base de datos MySQL con ID '+ connection.threadId);
  });

module.exports = connection;