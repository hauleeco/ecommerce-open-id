"use strict";

const Models = require("../../db/models");
const BaseServiceCRUD = require("../../base/BaseServiceCRUD");
const Boom = require("@hapi/boom");
const _ = require("lodash");
class CodeService extends BaseServiceCRUD {
  constructor() {
    super(Models.Code, "Code");
  }
}

module.exports = CodeService;
