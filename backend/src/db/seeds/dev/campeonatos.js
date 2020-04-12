
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('campeonatos').del()
    .then(function () {
      // Inserts seed entries
      return knex('campeonatos').insert([
        {id: 1, nome: 'Divisão de Acesso', ano: 2020},
        {id: 2, nome: 'CopaFGF', ano: 2020}
      ]);
    });
};
