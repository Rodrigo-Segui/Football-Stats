exports.up = function (knex) {
    return knex.schema.createTable('partidas', function (table) {
        table.increments();

        table.integer('adversario_id').notNullable();
        table.foreign('adversario_id').references('id').inTable('clubes');
        
        table.integer('golsPro').notNullable();
        table.integer('golsCon').notNullable();
        table.string('local', 1).notNullable();
        table.string('estadio').notNullable();

        table.integer('campeonato_id').notNullable();
        table.foreign('campeonato_id').references('id').inTable('campeonatos');

        table.date('data').notNullable();
        table.string('hora').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('partidas');
};