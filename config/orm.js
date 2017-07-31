// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput) {
    return new Promise((resolve, reject)=>{
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        resolve(result);
      });
    })
  },
  insertOne: function(table, cols, vals) {
    return new Promise((resolve, reject)=>{
      var queryString = "INSERT INTO " + table;

      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";

      console.log(queryString);

      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
        resolve(result); 
      });
    })
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(table, objColVals, condition) {
    return new Promise ((resolve, reject)=>{
      var queryString = "UPDATE " + table;

      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        resolve(result);
      });
    })
  },
  delete: function(table, condition) {
    return new Promise((resolve, reject)=>{
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;

      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        resolve(result);
      });
    })
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
