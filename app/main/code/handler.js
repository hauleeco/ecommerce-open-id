'use strict';

const CodeController = require('./controller');
const validator = require('./validator');

const controller = new CodeController();

exports.getMany = {
  description: 'Get Code list',
  notes: 'Return Code items',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: null,
  validate: {
    query: validator.searchParams
  }
};

exports.count = {
  description: 'Count Code list',
  notes: 'Return a count result of Code items',
  tags: ['api', 'v1'],
  handler: controller.count.bind(controller),
  auth: null,
  validate: {
    headers: validator.checkToken
  }
};

exports.getOne = {
  description: 'Get a Code',
  notes: 'Return a Code by id',
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
  description: 'Create a new Code',
  notes: 'Return created Code',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: null,
  validate: {
    payload: validator.createOne
  }
};

exports.updateOne = {
  description: 'Update Code',
  notes: 'Return updated Code by id',
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
  description: 'Delete a Code',
  notes: 'Return deleted Code by id',
  tags: ['api', 'v1'],
  handler: controller.deleteOne.bind(controller),
  auth: null,
  validate: {
    params: {
      id: validator.idParam
    }
  }
};
