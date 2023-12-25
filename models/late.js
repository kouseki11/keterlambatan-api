'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Late extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Late.belongsTo(models.Student, {
        foreignKey: 'student_id',
        as: 'student'
      });
    }
  }
  Late.init({
    student_id: DataTypes.INTEGER,
    date_time_late: {
      type: DataTypes.DATE
    },
    information: {
      type: DataTypes.TEXT
    },
    bukti: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
  }, {
    sequelize,
    modelName: 'Late',
    tableName: 'lates'
  });
  return Late;
};