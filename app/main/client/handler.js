'use strict';

const ClientController = require('./controller');
const validator = require('./validator');

const controller = new ClientController();

exports.getMany = {
  description: 'Get Client list',
  notes: 'Return Client items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: false,
  validate: {
    query: validator.searchParams
  }
};

exports.count = {
  description: 'Count Client list',
  notes: 'Return a count result of Client items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: false,
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a Client',
  notes: 'Return a Client by id',
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
  description: 'Create a new Client',
  notes: 'Return created Client',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: false,
  validate: {
    payload: validator.createOne
  }
};

exports.verify = {
  description: 'verify a new Client',
  notes: 'verify Client',
  tags: ['api', 'v1'],
  handler: controller.verify.bind(controller),
  auth: false,
  validate: {
    payload: validator.verify
  }
};

exports.updateOne = {
  description: 'Update Client',
  notes: 'Return updated Client by id',
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
  description: 'Delete a Client',
  notes: 'Return deleted Client by id',
  tags: ['api', 'v1'],
  handler: controller.deleteOne.bind(controller),
  auth: false,
  validate: {
    params: {
      id: validator.idParam
    }
  }
};
