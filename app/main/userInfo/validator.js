"use strict";

const Joi = require("@hapi/joi");
const {
  queryParams,
  checkToken,
  searchParams,
  idParam,
  strEmail,
} = require("../../utils/validatorUtils");

exports.queryParams = queryParams;

exports.searchParams = searchParams;

exports.checkToken = checkToken;

exports.idParam = idParam();

exports.createOne = {
  username: Joi.string().required(),
  password: Joi.string().required(),
  firstname: Joi.string().allow(null),
  lastname: Joi.string().allow(null),
  email: strEmail().allow(null),
  phone: Joi.string().allow(null),
  address: Joi.string().allow(null),
};

exports.updateOne = {
  username: Joi.string(),
  password: Joi.string(),
  firstname: Joi.string().allow(null),
  lastname: Joi.string().allow(null),
  email: strEmail().allow(null),
  phone: Joi.string().allow(null),
  address: Joi.string().allow(null),
};

exports.checkRequestGetTokenBody = {
  username: Joi.string().required(),
  password: Joi.string().required(),
};
exports.checkRequestGetTokenQuery = {
  client_id: Joi.string().required(),
  state: Joi.string().required(),
};
