const mysql = require("mysql");

// create the connection information for the sql database
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password', 
    database : 'burgers_db' 
  });
}

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

module.exports = connection;