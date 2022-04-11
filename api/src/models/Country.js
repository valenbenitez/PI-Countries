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

    flag:{
      type: DataTypes.STRING,
      allowNull:false,
    },

    continent:{
      type: DataTypes.STRING,
      allowNull:false
    },

    capital:{
      defaultValue: 'not found',
      type: DataTypes.STRING
    },

    subregion:{
      type:DataTypes.STRING,
    },

    area:{
      type:DataTypes.STRING
    },
    poblacion:{
      type:DataTypes.STRING
    }
  },{timestamps : false});
  
};
