
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clubes').del()
    .then(function () {
      // Inserts seed entries
      return knex('clubes').insert([
        {id: 1, nome: 'Bagé'},
        {id: 2, nome: 'Guarany'},
        {id: 3, nome: 'Pelotas'},
        {id: 4, nome: 'Brasil de Pelotas'},
        {id: 5, nome: 'Farroupilha'},
        {id: 6, nome: 'Rio Grande'},
        {id: 7, nome: 'São Paulo de Rio Grande'},
        {id: 8, nome: 'Inter-SM'},
        {id: 9, nome: 'Riograndense-SM'},
        {id: 10, nome: 'São Gabriel'},
        {id: 11, nome: 'Cruzeiro-RS'},
        {id: 12, nome: 'Lajeadense'},
        {id: 13, nome: 'Avenida'},
        {id: 14, nome: 'Santa Cruz'},
        {id: 15, nome: 'Guarani-VA'},
        {id: 16, nome: 'Aimoré'},
        {id: 17, nome: 'Novo Hamburgo'}
      ]);
    });
};
