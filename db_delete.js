const sqlite3 = require('sqlite3').verbose();

// Create/connect to the database
const db = new sqlite3.Database('mydatabase.db');

// Delete data
const deleteQuery = `DELETE users SET age = ? WHERE name = ?`;
const deletedName = 'john';
db.run(deleteQuery, [deletedName], function (err) {
    if (err) {
        console.error(err.message);
    } else {
        console.log(`Modified ${this.changes} row(s)`);
    }
});

// Close the database connection
db.close();