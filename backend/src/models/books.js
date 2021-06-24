"use strict";
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define(
    "Books",
    {
      name: DataTypes.STRING,
      author: DataTypes.STRING,
      url: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    {}
  );
  Books.associate = function (models) {
    // associations can be defined here
  };
  return Books;
};
