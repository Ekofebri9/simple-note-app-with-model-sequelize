'use strict';
module.exports = (sequelize, DataTypes) => {
  const notes = sequelize.define('notes', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {});
  notes.associate = function(models) {
    notes.belongsTo(models.category, { foreignKey: 'category_id' } );
  };
  return notes;
};