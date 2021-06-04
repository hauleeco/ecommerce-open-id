'use strict';

const path = require('path');
const { randomClientSecretKey, randomClientState } = require('../../utils/randomBytes');
const CustomModel = require('./CustomModel');

class Client extends CustomModel {
  static get tableName() {
    return 'Client';
  }
  
  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.updated_at = new Date().toISOString();
    this.client_secret = randomClientSecretKey();
    this.state = randomClientState();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
  // static get relationMappings() {
  //   return {
  //     role: {
  //       relation: CustomModel.HasManyRelation,
  //       modelClass: path.join(__dirname, '/Role'),
  //       join: {
  //         from: 'Clients.roleId',
  //         to: 'role.id'
  //       }
  //     }
  //   };
  // }
}


module.exports = Client;