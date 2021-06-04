"use strict";

const BaseControllerCRUD = require("../../base/BaseControllerCRUD");
const ClientService = require("./service");

class ClientController extends BaseControllerCRUD {
  constructor() {
    super(new ClientService());
  }
  async verify(request) {
    try {
      const {
        payload
      } = request;
      return this.service.verify(payload);
    } catch (err) {
      throw err;
    }
  };
}

module.exports = ClientController;
