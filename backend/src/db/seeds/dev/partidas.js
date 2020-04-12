
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('partidas').del()
    .then(function () {
      // Inserts seed entries
      return knex('partidas').insert([
        {
          id: 1, adversario_id: 2, golsPro: 4, golsCon: 0, local: 'c',
          estadio: 'Pedra Moura', campeonato_id: 1, data: '20/02/2020', hora: '16h'
        },
        {
          id: 2, adversario_id: 4, golsPro: 2, golsCon: 1, local: 'f',
          estadio: 'Bento Freitas', campeonato_id: 2, data: '24/02/2020', hora: '16h'
        },
        {
          id: 3, adversario_id: 5, golsPro: 2, golsCon: 0, local: 'c',
          estadio: 'Pedra Moura', campeonato_id: 1, data: '28/02/2020', hora: '16h'
        },
      ]);
    });
};
