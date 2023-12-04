const sqlite3 = require('sqlite3').verbose();

// Create/connect to the database
const db = new sqlite3.Database('mydatabase.db');

// Modify data
const updateQuery = `UPDATE users SET age = ? WHERE name = ?`;
const updatedAge = 30;
const updatedName = 'name2';
db.run(updateQuery, [updatedAge, updatedName], function (err) {
    if (err) {
        console.error(err.message);
    } else {
        console.log(`Modified ${this.changes} row(s)`);
    }
});

// Close the database connection
db.close();