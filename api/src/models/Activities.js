const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("activities", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
    },
    dificultad: {
      type: DataTypes.INTEGER,
    },
    duracion: {
      type: DataTypes.INTEGER,
    },
    temporada: {
      type: DataTypes.STRING,
    },
  }, {timestamps: false});
};
