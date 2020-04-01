var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, tableInput, function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(tableInput, columnInput, valueInput, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES(?)";
    connection.query(queryString, [tableInput, columnInput, valueInput], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  updateOne: function(tableInput, columnInput, valueInput, conditionCol, conditionVal, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE condition = ?";
    connection.query(queryString, [tableInput, columnInput, valueInput, conditionCol, conditionVal], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  }
}

module.exports = orm;