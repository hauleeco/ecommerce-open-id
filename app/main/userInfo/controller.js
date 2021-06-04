"use strict";

const BaseControllerCRUD = require("../../base/BaseControllerCRUD");
const UserService = require("./service");

class UserController extends BaseControllerCRUD {
  constructor() {
    super(new UserService());
  }
  async checkRequestClient(request) {
    try {
      const {
        payload
      } = request;
      const originHeader = request.headers.origin;
      return this.service.checkRequestClient(payload, request.query, originHeader);
    } catch (err) {
      throw err;
    }
  };

  async getToken(request) {
    try {
      const {
        payload
      } = request;
      const originHeader = request.headers.origin;
      return this.service.getToken(payload, originHeader);
    } catch (err) {
      throw err;
    }
  };
}

module.exports = UserController;
