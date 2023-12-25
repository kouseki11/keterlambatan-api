'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rombel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rombel.hasMany(models.Student, {
        foreignKey: 'rombel_id',
      });
    }
  }
  Rombel.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rombel',
    tableName: 'rombels'
  });
  return Rombel;
};