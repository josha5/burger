const connection = require("./connection.js");

const orm = {
    selectAll: function(cb) {
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function(val1, val2, callback) {
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('?, ?')";
        connection.query(queryString, [val1, val2], function(err, result) {
            if(err) throw err;
            callback(result);
        });
    },
    updateOne: function(ID, cb) {
        let queryString = "UPDATE burgers set ? where ?, [{devoured: true}, {id: ID},]";
        connection.query(queryString, function(err, result) {
            callback(result);
        });
    }
}


module.exports = orm;