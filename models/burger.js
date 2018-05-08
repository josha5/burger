const orm = require("../config/orm.js");

const burger = {

    selectAll: function(callback){
      orm.All(function(res){
        callback(res);
      });
    },
  
    insertOne: function(burger_name, callback){
      orm.insert(burger_name, function(res){
        callback(res);
      });
    },
  
    updateOne: function(burger_id, callback){
      orm.update(burger_id, function(res){
        callback(res);
      });
    }
  
  };



module.exports = burger;