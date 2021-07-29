const Collaborator = (sequelize, DataTypes) => {
    return sequelize.define('Collaborator', {
      name: DataTypes.STRING,
      pis: DataTypes.STRING,
      registration: DataTypes.STRING,
    });
  };
  
  module.exports = Collaborator;