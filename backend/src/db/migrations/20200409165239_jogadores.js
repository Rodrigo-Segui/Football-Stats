exports.up = function (knex) {
    return knex.schema.createTable('jogadores', function (table) {
        table.increments();
        table.string('nome').notNullable();
        table.string('posicao').notNullable();
        table.date('nascimento').notNullable();
        table.string('pais').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('jogadores');
};
