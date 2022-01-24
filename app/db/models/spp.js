'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Spp.init({
    tahun: DataTypes.INTEGER,
    nominal: DataTypes.INTEGER,
    user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Spp',
  });
  return Spp;
};