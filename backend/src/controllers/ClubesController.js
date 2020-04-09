const connection = require('../db/connection');

module.exports = {
    async create (req, res) {
        const { nome } = req.body;
    
        await connection('clubes').insert({
            nome
        });
    
        return res.json({ nome });
    }
}