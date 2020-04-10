const connection = require('../db/connection');

module.exports = {
    async create (req, res) {
        const { adversario_id, golsPro, golsCon, local, estadio, campeonato_id, data, hora } = req.body;
    
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
    
        return res.json({ estadio });
    }
}