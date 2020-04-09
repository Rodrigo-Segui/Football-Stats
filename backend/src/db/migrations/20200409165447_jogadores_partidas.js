exports.up = function (knex) {
    return knex.schema.createTable('jogadores_partidas', function (table) {
        table.increments();

        table.integer('jogador_id').notNullable();
        table.foreign('jogador_id').references('id').inTable('jogadores');

        table.integer('partida_id').notNullable();
        table.foreign('partida_id').references('id').inTable('partidas');

        table.integer('gols');
        
        table.integer('clube_id').notNullable();
        table.foreign('clube_id').references('id').inTable('clubes');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('jogadores_partidas');
};