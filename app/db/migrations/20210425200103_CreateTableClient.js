("use strict");

exports.up = function (knex) {
  return knex.schema.createTable("Client", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("client_secret");
    table.string("name_client");
    table.string("url_redirect");
    table.string("state");

    table.timestamp("created_at");
    table.timestamp("updated_at");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Client");
};
