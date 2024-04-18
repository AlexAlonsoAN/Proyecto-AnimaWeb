const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        pics: {
          type: DataTypes.STRING,
        },
        stock: {
          type: DataTypes.STRING,
        },
        price: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        featured: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "product",
      }
    );
    return Product;
  }
}

module.exports = Product;
