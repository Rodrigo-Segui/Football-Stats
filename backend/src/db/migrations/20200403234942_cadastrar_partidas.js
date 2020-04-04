
exports.up = function (knex) {
    return knex.schema.createTable('partidas', function (table) {
        table.increments();
        table.string('placar').notNullable();
        table.string('adversario').notNullable();
        table.string('gols').notNullable();
        table.string('local', 1).notNullable();
        table.string('estadio').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('partidas');
};
