exports.up = function (knex) {
    return knex.schema.createTable('campeonatos', function (table) {
        table.increments();
        table.string('nome').notNullable();
        table.integer('ano').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('campeonatos');
};
