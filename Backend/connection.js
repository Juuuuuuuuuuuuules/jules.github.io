const connection = function(){
    const mysql = require('mysql2');
// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'demo',
  password: 'demo',
  database: 'coding'
});
// connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
      console.log('Connected to MySQL database!');
    }
});
return connection;
}
module.exports ={
    connection
}
// close the MySQL connection
//connection.end()