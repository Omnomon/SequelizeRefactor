var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-03.cleardb.net",
    user: "bcd18c86f566a4",
    password: "1922b46f",
    database: "heroku_7714e86b8b4ccfd"
});


connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);

        return;
    }
    console.log("connected as id " + connection.threadId);
});


function handleDisconnect() {

    return new Promise((resolve, reject) => {
        // the old one cannot be reused.

        connection.connect(function(err) { // The server is either down
            if (err) { 	// or restarting (takes a while sometimes).
                console.log('error when connecting to db:', err);
                setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
            } // to avoid a hot loop, and to allow our node script to
        }); // process asynchronous requests in the meantime.
        // If you're also serving http, display a 503 error.
        connection.on('error', function(err) {
            console.log('db error', err);
            if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
                handleDisconnect(); // lost due to either server restart, or a
            } else { // connnection idle timeout (the wait_timeout
                throw err; // server variable configures this)
            }
        });
    })


}

handleDisconnect();

module.exports = connection;