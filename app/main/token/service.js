"use strict";

const Models = require("../../db/models");
const BaseServiceCRUD = require("../../base/BaseServiceCRUD");
const Boom = require("@hapi/boom");
const _ = require("lodash");
class TokenService extends BaseServiceCRUD {
  constructor() {
    super(Models.Token, "Token");
  }
}

module.exports = TokenService;
