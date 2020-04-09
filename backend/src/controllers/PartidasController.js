const connection = require('../db/connection');

module.exports = {
    async create (req, res) {
        const { adversario_id, golsPro, golsCon, local, estadio, campeonato, data, hora } = req.body;
    
        await connection('partidas').insert({
            adversario_id,
            golsPro,
            golsCon,
            local,
            estadio,
            campeonato,
            data,
            hora
        });
    
        return res.json({ estadio });
    }
}