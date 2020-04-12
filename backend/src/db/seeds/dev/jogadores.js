
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jogadores').del()
    .then(function () {
      // Inserts seed entries
      return knex('jogadores').insert([
        {id: 1, nome: 'Hyantony', posicao: 'Atacante', nascimento: '01/01/1980', pais: 'Brasil'},
        {id: 2, nome: 'Léo Bahia', posicao: 'Atacante', nascimento: '01/01/1980', pais: 'Brasil'},
        {id: 3, nome: 'Gustavinho', posicao: 'Meio-campo', nascimento: '01/01/1980', pais: 'Brasil'},
        {id: 4, nome: 'André', posicao: 'Zagueiro', nascimento: '01/01/1980', pais: 'Brasil'},
        {id: 5, nome: 'Gustavo Nogy', posicao: 'Lateral-esquerdo', nascimento: '01/01/1980', pais: 'Brasil'},
        {id: 6, nome: 'Maicon Santana', posicao: 'Atacante', nascimento: '01/01/1980', pais: 'Brasil'},
        {id: 7, nome: 'Leomir', posicao: 'Meio-campo', nascimento: '01/01/1980', pais: 'Brasil'},
        {id: 8, nome: 'Vinicius', posicao: 'Atacante', nascimento: '01/01/1980', pais: 'Brasil'}
      ]);
    });
};
