'use strict';

const handler = require('./handler');

const Routes = [
  {
    method: 'GET',
    path: '/api/v1/users',
    config: handler.getMany
  },
  {
    method: 'GET',
    path: '/api/v1/users/{id}',
    config: handler.getOne
  },
  {
    method: 'GET',
    path: '/api/v1/users/count',
    config: handler.count
  },
  {
    method: 'POST',
    path: '/api/v1/users',
    config: handler.createOne
  },
  {
    method: 'POST',
    path: '/api/v1/users/check',
    config: handler.checkRequestClient
  },
  {
    method: 'POST',
    path: '/api/v1/users/getToken',
    config: handler.getToken
  },
  {
    method: 'PUT',
    path: '/api/v1/users/{id}',
    config: handler.updateOne
  },
  {
    method: 'DELETE',
    path: '/api/v1/users/{id}',
    config: handler.deleteOne
  }
];

module.exports = Routes;
