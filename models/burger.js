const orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (cols, vals, cCol, cVal, cb) {
        orm.insertOne("burgers", cols, vals, cCol, cVal, function (err, result) {
            cb(result);
        });
    }
};

module.exports = burger;