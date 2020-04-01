const orm = require("../config/orm.js");

var burger = {
    selectAll: function (tableInput, cb) {
        orm.selectAll(tableInput, function (res) {
            cb(res);
        });
    },
    insertOne: function (tableInput, columnInput, valueInput, cb) {
        orm.insertOne(tableInput, columnInput, valueInput, function (res) {
            cb(res);
        });
    },
    updateOne: function (tableInput, columnInput, valueInput, conditionCol, conditionVal, cb) {
        orm.insertOne(tableInput, columnInput, valueInput, conditionCol, conditionVal, function (res) {
            cb(res);
        });
    }
}

module.exports = burger;