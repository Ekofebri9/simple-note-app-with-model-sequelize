'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    category_name: DataTypes.STRING
  }, {
    underscored: true,
  });
  category.associate = function(models) {
    category.hasMany(models.note);
  };
  return category;
};