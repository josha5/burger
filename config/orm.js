const connection = require("./connection.js");

const orm = {

    // selectAll()
    selectAll: function(callback) {
      let queryStr = 'SELECT * FROM burgers';
      connection.query(queryStr, function (err, result) {
        if (err) throw err;
        callback(result);
      });
  
    },
    insertOne: function(burger_name, callback){
      let queryStr = 'INSERT INTO burgers SET ?';
      connection.query(queryStr, {burger_name: burger_name,devoured: false}, function (err, result) {
        if (err) throw err;
        callback(result);
      });
    },
    updateOne: function(burgerID, callback){
      let queryStr = 'UPDATE burgers SET ? WHERE ?';
      connection.query(queryStr, [{devoured: true}, {id: burgerID}], function (err, result) {
          if (err) throw err;
          callback(result);
        });
  
    }
  
  };


module.exports = orm;