var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "matrix",
  database: "burger_db"
});


//if the server contains the variable, it connects to the jawsDB
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  
//if no variable, it falls back on an explicitly defined local database
} else {

connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "matrix",
    database: "burgers_db"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;