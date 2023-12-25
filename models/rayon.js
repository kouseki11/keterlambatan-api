'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rayon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rayon.hasMany(models.Student, {
        foreignKey: 'rayon_id',
      });
    }
  }
  Rayon.init({
    name: DataTypes.STRING,
    p_rayon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rayon',
    tableName: 'rayons'
  });
  return Rayon;
};