"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AlbumCate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AlbumCate.belongsTo(models.Album, { foreignKey: "AlbumId" });
    }
  }
  AlbumCate.init(
    {
      AlbumId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Album",
          key: "id",
        },
        onDelete: "CASCADE",
      },

      CateId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Cate",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "AlbumCate",
    }
  );
  return AlbumCate;
};
