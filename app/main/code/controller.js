"use strict";

const BaseControllerCRUD = require("../../base/BaseControllerCRUD");
const CodeService = require("./service");

class CodeController extends BaseControllerCRUD {
  constructor() {
    super(new CodeService());
  }
}

module.exports = CodeController;
