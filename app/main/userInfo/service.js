"use strict";

const Models = require("../../db/models");
const BaseServiceCRUD = require("../../base/BaseServiceCRUD");
const Boom = require("@hapi/boom");
const _ = require("lodash");
const PasswordUtils = require("../../services/password");
const ClientService = require("../client/service");
const jwt = require("../../services/jwt");
const {
  randomCode,
  randomClientState,
  randomAccessToken,
} = require("../../utils/randomBytes");
const config = require("../../config");

class UserService extends BaseServiceCRUD {
  constructor() {
    super(Models.UserInfo, "UserInfo");
  }
  async createOne(payload) {
    const user = await Models.UserInfo.query().findOne({
      username: payload.username,
    });
    if (user) {
      throw Boom.badRequest("username is existing");
    }
    return this.model.query().insert(payload).returning("*");
  }

  async checkRequestClient(payload, query, originHeader) {
    const { username, password } = payload;
    const { client_id, state } = query;
    const url_redirect = originHeader;

    const clientService = new ClientService();
    const payloadVerify = {
      clientId: client_id,
      state,
      url_redirect,
    };
    const payloadLogin = {
      username,
      password,
    };
    const client = await clientService.verify(payloadVerify);
    if (!client) {
      throw Boom.badRequest("Invalid Request");
    }
    const user = await this.login(payloadLogin);

    const codeFind = await Models.Code.query().where({
      client_id,
      user_id: user.id,
    });
    let codeUpsert = null;
    const codeRd = randomCode();
    const stateRd = randomClientState();

    if (_.isEmpty(codeFind)) {
      codeUpsert = await Models.Code.query()
        .insert({
          code: codeRd,
          client_id: client.id,
          state: stateRd,
          user_id: user.id,
          name: "string",
        })
        .returning("*");
    } else {
      codeUpsert = await Models.Code.query().updateAndFetchById(
        codeFind[0].id,
        {
          code: codeRd,
          state: stateRd,
        }
      );
    }
    return {
      code: codeUpsert.code,
      state: codeUpsert.state,
    };
  }

  async getToken(payload, originHeader) {
    const { grant_type, code, state } = payload;
    const url_redirect = originHeader;
    const codeFind = await Models.Code.query().where({ code, state }).eager('client');
    if (_.isEmpty(codeFind) || codeFind[0].client.url_redirect !== url_redirect) {
      throw Boom.badRequest("Invalid Request");
    }
    const tokenFind = await Models.Token.query().where({
      client_id: codeFind[0].client_id,
      user_id: codeFind[0].user_id,
    });
    const user = await Models.UserInfo.query().findById(codeFind[0].user_id);
    const data = _.pick(user, [
      "id",
      "firstname",
      "lastname",
      "username",
      "email",
      "phone",
      "address",
    ]);
    const id_token = _.assign(
      {
        token: jwt.issue(data),
      },
      data
    );
    const access_token = randomAccessToken();
    const token_type = "Bearer";

    let tokenUpsert = null;
    if (_.isEmpty(tokenFind)) {
      tokenUpsert = await Models.Token.query()
        .insert({
          id_token,
          token_type,
          access_token,
          user_id: codeFind[0].user_id,
          client_id: codeFind[0].client_id,
          expires_in: config.jwt.expired || 3600,
        })
        .returning("*");
    } else {
      tokenUpsert = await Models.Token.query().updateAndFetchById(
        tokenFind[0].id,
        {
          id_token: id_token.token,
          access_token,
        }
      );
    }
    return {
      access_token,
      id_token: id_token.token,
      token_type,
      expires_in: tokenUpsert.expires_in,
    };
  }

  async login(payload) {
    try {
      const { username, password } = payload;
      const user = await Models.UserInfo.query().findOne({
        username,
      });
      if (!user) {
        throw Boom.unauthorized("INCORRECT EMAIL OR PASSWORD");
      }
      const isCorrectPassword = await PasswordUtils.compare(
        password,
        user.password
      );
      if (!isCorrectPassword) {
        throw Boom.unauthorized("INCORRECT EMAIL OR PASSWORD");
      }
      const data = _.pick(user, [
        "id",
        "firstname",
        "lastname",
        "username",
        "email",
        "phone",
        "address",
      ]);
      return _.assign(
        {
          token: jwt.issue(data),
        },
        data
      );
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserService;
