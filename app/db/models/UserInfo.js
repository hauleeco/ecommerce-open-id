"use strict";

const path = require("path");
const CustomModel = require("./CustomModel");
const PasswordUtils = require("../../services/password");

class User extends CustomModel {
  static get tableName() {
    return "User_info";
  }

  static get $hidden() {
    return ["password"];
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.updated_at = new Date().toISOString();
    this.password = PasswordUtils.hashSync(this.password);
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
    if (this.password) {
      this.password = PasswordUtils.hashSync(this.password);
    }
  }
  // static get relationMappings() {
  //   return {
  //     role: {
  //       relation: CustomModel.HasManyRelation,
  //       modelClass: path.join(__dirname, '/Role'),
  //       join: {
  //         from: 'users.roleId',
  //         to: 'role.id'
  //       }
  //     }
  //   };
  // }
}

module.exports = User;
