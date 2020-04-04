const connection = require('../db/connection');

module.exports = {
    async create (req, res) {
        const { placar, adversario, gols, local, estadio } = req.body;
    
        await connection('partidas').insert({
            placar,
            adversario,
            gols,
            local,
            estadio,
        });
    
        return res.json({ estadio });
    }
}