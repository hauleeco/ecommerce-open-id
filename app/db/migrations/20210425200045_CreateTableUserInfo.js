("use strict");

exports.up = function (knex) {
  return knex.schema.createTable("User_info", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("username").unique();
    table.string("password");
    table.string("name");
    table.string("firstname");
    table.string("lastname");
    table.string("email");
    table.string("phone");
    table.string("address");

    table.timestamp("created_at");
    table.timestamp("updated_at");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("User_info");
};
