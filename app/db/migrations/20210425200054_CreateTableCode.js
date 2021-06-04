("use strict");

exports.up = function (knex) {
  return knex.schema.createTable("Code", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("code");
    table.uuid("client_id");
    table.string("state");
    table.uuid("user_id");
    table.string("name");

    table.timestamp("created_at");
    table.timestamp("updated_at");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Code");
};
