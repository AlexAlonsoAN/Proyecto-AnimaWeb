const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        status: {
          type: DataTypes.ENUM,
          values: ["pending", "declined", "payment", "shipped", "delivered"],
          allowNull: true,
        },
        productList: {
          type: DataTypes.JSON,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "order",
      }
    );
    return Order;
  }
}

module.exports = Order;
