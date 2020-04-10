const connection = require('../db/connection');

module.exports = {
    async create (req, res) {
        const { nome, ano } = req.body;
    
        await connection('campeonatos').insert({
            nome,
            ano
        });
    
        return res.json({ nome });
    }
}