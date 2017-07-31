// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function() {
    return new Promise ((resolve, reject)=>{
      orm.selectAll("burger").then(res=>{
        resolve(res) 
      })
    })
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals) {
    return new Promise ((resolve, reject)=>{
      orm.insertOne("burger", cols, vals).then(res=>{
        resolve(res) 
      })
    })
  },
  updateOne: function(objColVals, condition) {
    return new Promise((resolve, reject)=>{
      orm.updateOne("burger", objColVals, condition).then(res=>{
        resolve(res) 
      })
    })

  },
  delete: function(condition) {
    return new Promise((resolve, reject)=>{
       orm.delete("burger", condition).then(res=>{
        resolve(res) 
      })     
     })
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
