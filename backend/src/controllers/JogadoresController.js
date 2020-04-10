const connection = require('../db/connection');

module.exports = {
    async create (req, res) {
        const { nome, posicao, nascimento, pais } = req.body;
    
        await connection('jogadores').insert({
            nome,
            posicao,
            nascimento,
            pais
        });
    
        return res.json({ nome });
    }
}