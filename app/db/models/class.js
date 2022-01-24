'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Class.init(
    {
      name_class: DataTypes.STRING,
      kompetensi_keahlian: DataTypes.STRING,
      user: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Class',
    }
  );
  return Class;
};
