'use strict';

const handler = require('./handler');

const Routes = [
  {
    method: ['GET', 'POST'],
    path: '/home',
    config: handler.createClient
  },
  {
    method: ['GET', 'POST'],
    path: '/home/check-info',
    config: handler.renderCheckInfo
  },
  {
    method: ['GET', 'POST'],
    path: '/home/register',
    config: handler.register
  },
  {
    method: ['GET', 'POST'],
    path: '/home/login',
    config: handler.login
  },
];

module.exports = Routes;
