const { Model, DataTypes } = require("sequelize");

class Categorie extends Model {
  static initModel(sequelize) {
    Categorie.init(
      {
        id: {
          type: DataTypes.BIGINT, // Notar que si bien esto en BD se guarda como BIGINT (8 bytes), Sequelize lo retorna como String, ya que JavaScript no lo puede representar.
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "categorie",
      }
    );
    return Categorie;
  }
}

module.exports = Categorie;
