const { request } = require('express');

const collaboratorsController = require('./collaboratorsController');
const afdsController = require('./afdsController');

module.exports = {
  collaborators: collaboratorsController,
  afds: afdsController,
};
