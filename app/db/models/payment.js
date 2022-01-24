'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init(
    {
      user: DataTypes.INTEGER,
      student: DataTypes.INTEGER,
      tgl_payment: DataTypes.DATE,
      month_payment: DataTypes.STRING,
      year_payment: DataTypes.STRING,
      spp: DataTypes.INTEGER,
      total_payment: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Payment',
    }
  );
  return Payment;
};
