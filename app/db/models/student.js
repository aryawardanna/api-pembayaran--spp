'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init(
    {
      nis: DataTypes.STRING,
      name: DataTypes.STRING,
      user: DataTypes.INTEGER,
      class: DataTypes.INTEGER,
      address: DataTypes.STRING,
      no_telp: DataTypes.STRING,
      spp: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Student',
    }
  );
  return Student;
};
