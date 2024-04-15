const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT, // Notar que si bien esto en BD se guarda como BIGINT (8 bytes), Sequelize lo retorna como String, ya que JavaScript no lo puede representar.
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
        itemList {
          
        },
        password: {
          type: DataTypes.STRING,
        },
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
