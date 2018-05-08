const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        })
    },

    insert: function(val1, val2, cb) {
        orm.insert(val1, val2, function(res) {
            cb(res);
        });
    },

    update: function(ID, cb) {
        orm.updateOne(ID, function(res) {
            cb(res);
        })
    }
}



module.exports = burger;