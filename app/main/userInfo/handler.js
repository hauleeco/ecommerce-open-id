'use strict';

const UserController = require('./controller');
const validator = require('./validator');

const controller = new UserController();

exports.getMany = {
  description: 'Get User list',
  notes: 'Return User items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: false,
  validate: {
    query: validator.searchParams
  }
};

exports.count = {
  description: 'Count User list',
  notes: 'Return a count result of User items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a User',
  notes: 'Return a User by id',
  tags: ['api', 'v1'],
  handler: controller.getOne.bind(controller),
  auth: false,
  validate: {
    params: {
      id: validator.idParam
    }
  }
};

exports.createOne = {
  description: 'Create a new User',
  notes: 'Return created User',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: false,
  validate: {
    payload: validator.createOne
  }
};
exports.checkRequestClient = {
  description: 'Check Client',
  notes: 'Checked Client',
  tags: ['api', 'v1'],
  handler: controller.checkRequestClient.bind(controller),
  auth: false
};
exports.getToken = {
  description: 'getToken',
  notes: 'getToken',
  tags: ['api', 'v1'],
  handler: controller.getToken.bind(controller),
  auth: false
};

exports.updateOne = {
  description: 'Update User',
  notes: 'Return updated User by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: false,
  validate: {
    params: {
      id: validator.idParam
    },
    payload: validator.updateOne
  }
};

exports.deleteOne = {
  description: 'Delete a User',
  notes: 'Return deleted User by id',
  tags: ['api', 'v1'],
  handler: controller.deleteOne.bind(controller),
  auth: false,
  validate: {
    params: {
      id: validator.idParam
    }
  }
};
