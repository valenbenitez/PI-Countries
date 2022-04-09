const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING(3),
      primaryKey: true,
      unique: true,
      allowNull:false,
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Flag:{
      type: DataTypes.STRING,
      allowNull:false,
    },

    Continent:{
      type: DataTypes.STRING,
      allowNull:false
    },

    Capital:{
      type: DataTypes.STRING,
      allowNull:false
    },

    Subregion:{
      type:DataTypes.STRING,
    },

    Area:{
      type:DataTypes.STRING
    },
    Poblacion:{
      type:DataTypes.STRING
    }
  },{timestamps : false});
  
};
