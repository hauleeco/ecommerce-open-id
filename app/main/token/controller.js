"use strict";

const BaseControllerCRUD = require("../../base/BaseControllerCRUD");
const TokenService = require("./service");

class TokenController extends BaseControllerCRUD {
  constructor() {
    super(new TokenService());
  }
}

module.exports = TokenController;
