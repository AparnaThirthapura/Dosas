// Set up MySQL connection.
// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "dosaDB"
// });

// Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

var mysql = require('mysql'),
    connection,
    source = {
        localhost: {
            port: 3306,
            host: 'localhost',
            user: 'root', // Your MySql username
            password: '', // Your MySql password
            database: 'dosaDB' 
        },
        jawsDB: {
            port: 3306,
            host: 'otmaa16c1i9nwrek.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            user: 'ew8shbbo9f1kolya',
            password: 'imyeqh0repn6alqr',
            database: 'he0o2bfs4c22eipy'
        }
    };

// connect to localhost if jawsdb doesn't exist
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(source.jawsDB);
} else {
    connection = mysql.createConnection(source.localhost);
}

// Connect!!
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Databased connected as id: ' + connection.threadId);
});

module.exports = connection;
// Export connection for our ORM to use.
module.exports = connection;
