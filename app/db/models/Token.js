'use strict';

const path = require('path');
const CustomModel = require('./CustomModel');

class Token extends CustomModel {
  static get tableName() {
    return 'Token';
  }
  
  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.updated_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
  static get relationMappings() {
    return {
      client: {
        relation: CustomModel.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/Client'),
        join: {
          from: 'Token.client_id',
          to: 'Client.id'
        }
      }
    };
  }
}


module.exports = Token;