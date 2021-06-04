("use strict");

exports.up = function (knex) {
  return knex.schema.createTable("Token", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("id_token", 1000);
    table.string("token_type");
    table.string("access_token");
    table.uuid("user_id");
    table.uuid("client_id");
    table.integer("expires_in");

    table.timestamp("created_at");
    table.timestamp("updated_at");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Token");
};
