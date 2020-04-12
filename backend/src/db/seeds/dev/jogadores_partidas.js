
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jogadores_partidas').del()
    .then(function () {
      // Inserts seed entries
      return knex('jogadores_partidas').insert([
        {id: 1, jogador_id: 1, partida_id: 1, gols: 4, clube_id: 1},
        {id: 2, jogador_id: 2, partida_id: 2, gols: 2, clube_id: 1},
        {id: 3, jogador_id: 4, partida_id: 2, gols: 1, clube_id: 4},
        {id: 4, jogador_id: 6, partida_id: 3, gols: 2, clube_id: 1}
      ]);
    });
};
