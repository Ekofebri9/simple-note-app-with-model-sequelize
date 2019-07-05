'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    category_name: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {});
  category.associate = function(models) {
    category.hasMany(models.notes)
  };
  return category;
};