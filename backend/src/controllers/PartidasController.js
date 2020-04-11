const connection = require('../db/connection');

module.exports = {
    async create(req, res) {
        const { adversario_id, golsPro, golsCon, local, estadio,
            campeonato_id, data, hora, jogador_golsPro, jogador_golsCon } = req.body;

        await connection('partidas').insert({
            adversario_id,
            golsPro,
            golsCon,
            local,
            estadio,
            campeonato_id,
            data,
            hora
        });

        const [partida] =  await connection('partidas').select(['id']).orderBy('id', 'desc').limit('1');
        const partida_id = Object.values(partida)[0];
        console.log(partida_id);

        //Cadastrando golsPro dos jogadores
        cadastrarGolsJogadores(jogador_golsPro, 1, partida_id);

        //Cadastrando golsCon dos jogadores
        cadastrarGolsJogadores(jogador_golsCon, adversario_id, partida_id);
        
        return res.json({ estadio });
    }
}

async function cadastrarGolsJogadores(jogador_gols, clube_id, partida_id) {
    var counts = {};
    jogador_gols.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
    });

    let array = Object.keys(counts);

    for (var i = 0; i < array.length; i++) {
        await connection('jogadores_partidas').insert({
            jogador_id: array[i],
            partida_id,
            gols: counts[array[i]],
            clube_id
        });
    }
}