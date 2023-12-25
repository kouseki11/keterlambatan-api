'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsTo(models.Rayon, {
        foreignKey: 'rayon_id',
        as: 'rayon'
        
      });
      Student.belongsTo(models.Rombel, {
        foreignKey: 'rombel_id',
        as: 'rombel'
      });
      Student.hasMany(models.Late, {
        foreignKey: 'student_id',
      });
    }
  }
  Student.init({
    nis: DataTypes.STRING,
    name: DataTypes.STRING,
    rayon_id: DataTypes.INTEGER,
    rombel_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student',
    tableName: 'students'
  });
  return Student;
};