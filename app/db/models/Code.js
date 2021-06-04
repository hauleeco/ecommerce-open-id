'use strict';

const path = require('path');
const CustomModel = require('./CustomModel');

class Code extends CustomModel {
  static get tableName() {
    return 'Code';
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
          from: 'Code.client_id',
          to: 'Client.id'
        }
      }
    };
  }
}


module.exports = Code;