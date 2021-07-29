const Afd = (sequelize, DataTypes) => {
    return sequelize.define('Afd', {
      number: DataTypes.STRING,
      fixed: DataTypes.STRING,
      date: DataTypes.STRING,
      hour: DataTypes.STRING,
      pis: DataTypes.STRING,
    });
  };
  
  module.exports = Afd;