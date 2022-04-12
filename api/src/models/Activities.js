const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("activities", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
    },
    Dificultad: {
      type: DataTypes.INTEGER,
    },
    Duracion: {
      type: DataTypes.INTEGER,
    },
    Temporada: {
      type: DataTypes.STRING,
    },
  }, {timestamps: false});
};
