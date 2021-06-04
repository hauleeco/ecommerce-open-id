'use strict';

const handler = require('./handler');

const Routes = [
  {
    method: 'GET',
    path: '/api/v1/tokens',
    config: handler.getMany
  },
  {
    method: 'GET',
    path: '/api/v1/tokens/{id}',
    config: handler.getOne
  },
  {
    method: 'GET',
    path: '/api/v1/tokens/count',
    config: handler.count
  },
  {
    method: 'POST',
    path: '/api/v1/tokens',
    config: handler.createOne
  },
  {
    method: 'PUT',
    path: '/api/v1/tokens/{id}',
    config: handler.updateOne
  },
  {
    method: 'DELETE',
    path: '/api/v1/tokens/{id}',
    config: handler.deleteOne
  }
];

module.exports = Routes;
