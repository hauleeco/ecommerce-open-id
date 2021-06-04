"use strict";

const Models = require("../../db/models");
const BaseServiceCRUD = require("../../base/BaseServiceCRUD");
const Boom = require("@hapi/boom");
const _ = require("lodash");
class ClientService extends BaseServiceCRUD {
  constructor() {
    super(Models.Client, "Client");
  }
  async getMany(query) {
    const builder = this.model
      .queryBuilder(query)
      .orderBy("created_at", "DESC");
    if (query.q) {
      builder.where(function () {
        this.where("name_client", "ilike", `%${query.q}%`);
      });
    }
    return builder;
  }
  async verify(payload) {
    const { url_redirect, state, clientId } = payload;
    const client = await Models.Client.query()
      .where({ url_redirect })
      .where({ state })
      .where({ id: clientId })
      .first();
    return client;
  }
}

module.exports = ClientService;
