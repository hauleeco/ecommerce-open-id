'use strict';

const TokenController = require('./controller');
const validator = require('./validator');

const controller = new TokenController();

exports.getMany = {
  description: 'Get Token list',
  notes: 'Return Token items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: null,
  validate: {
    query: validator.searchParams
  }
};

exports.count = {
  description: 'Count Token list',
  notes: 'Return a count result of Token items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: null,
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a Token',
  notes: 'Return a Token by id',
  tags: ['api', 'v1'],
  handler: controller.getOne.bind(controller),
  auth: null,
  validate: {
    params: {
      id: validator.idParam
    }
  }
};

exports.createOne = {
  description: 'Create a new Token',
  notes: 'Return created Token',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: null,
  validate: {
    payload: validator.createOne
  }
};

exports.updateOne = {
  description: 'Update Token',
  notes: 'Return updated Token by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: null,
  validate: {
    params: {
      id: validator.idParam
    },
    payload: validator.updateOne
  }
};

exports.deleteOne = {
  description: 'Delete a Token',
  notes: 'Return deleted Token by id',
  tags: ['api', 'v1'],
  handler: controller.deleteOne.bind(controller),
  auth: null,
  validate: {
    params: {
      id: validator.idParam
    }
  }
};
