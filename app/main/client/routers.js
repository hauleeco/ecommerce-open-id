'use strict';

const handler = require('./handler');

const Routes = [
  {
    method: 'GET',
    path: '/api/v1/clients',
    config: handler.getMany
  },
  {
    method: 'GET',
    path: '/api/v1/clients/{id}',
    config: handler.getOne
  },
  {
    method: 'GET',
    path: '/api/v1/clients/count',
    config: handler.count
  },
  {
    method: 'POST',
    path: '/api/v1/clients',
    config: handler.createOne
  },
  {
    method: 'POST',
    path: '/api/v1/clients/verify',
    config: handler.verify
  },
  {
    method: 'PUT',
    path: '/api/v1/clients/{id}',
    config: handler.updateOne
  },
  {
    method: 'DELETE',
    path: '/api/v1/clients/{id}',
    config: handler.deleteOne
  }
];

module.exports = Routes;
