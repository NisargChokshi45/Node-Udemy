const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
});

connection.query('SELECT * FROM user', (err, row, field) => {
    if (err)
        console.log(err);
    else {
        console.log("Fetching User Names from the Local DB ... \n");
        for (let i = 0; i < row.length; i++)
            console.log(row[i].user_name);
    }
});

connection.end();