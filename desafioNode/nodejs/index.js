// NodeJS with MySQL 8.x
// https://debugah.com/how-to-solve-nodejs-mysql-er_not_supported_auth_mode-12723/

const express = require('express')
const mysql = require('mysql');

const app = express()
const port = 3000

const config = { 
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config);
const sql = "insert into people(name) values('Smaniotto')";
var name; 
connection.query(sql);
connection.query("SELECT * FROM people ORDER BY id DESC LIMIT 1;", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    name = result[0]['name']
})
connection.end();

app.get ('/', (req,res) => {
    res.send('<h1>' + name + '</h1>' )
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})


