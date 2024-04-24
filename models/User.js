const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        surname: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
        },
        address: {
          type: DataTypes.STRING,
        },
        phonenumber: {
          type: DataTypes.STRING,
        },
        // itemList: {

        // },
        password: {
          type: DataTypes.STRING,
        },
        itemList:{
          
            type: DataTypes.STRING,
          
        }
      },
      {
        sequelize,
        modelName: "user",
      }
    );
    return User;
  }
}

module.exports = User;
