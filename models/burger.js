
// Export the database functions for the controller (catsController.js).
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger" , {
    burger_name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    ts :{
      type:DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  })

  return burger
}
