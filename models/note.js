'use strict';
module.exports = (sequelize, DataTypes) => {
  const note = sequelize.define('note', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    category_id: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  note.associate = function(models) {
    note.belongsTo(models.category, { foreignKey: 'category_id' } );
  };
  return note;
};