const orm = require("../config/orm.js");

const burger = {

    All: function(callback){
      orm.selectAll(function(res){
        callback(res);
      });
    },
  
    insert: function(burger_name, callback){
      orm.insertOne(burger_name, function(res){
        callback(res);
      });
    },
  
    update: function(burger_id, callback){
      orm.updateOne(burger_id, function(res){
        callback(res);
      });
    }
  
  };



module.exports = burger;