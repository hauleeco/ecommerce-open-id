"use strict";

const Joi = require("@hapi/joi");
const {
  queryParams,
  checkToken,
  searchParams,
  idParam,
} = require("../../utils/validatorUtils");

exports.queryParams = queryParams;

exports.searchParams = searchParams;

exports.checkToken = checkToken;

exports.idParam = idParam();

exports.createOne = {
  name_client: Joi.string().required(),
  url_redirect: Joi.string().required(),
  state: Joi.string().default("1"),
};

exports.updateOne = {
  name_client: Joi.string(),
  url_redirect: Joi.string(),
  state: Joi.string().default("1"),
};
