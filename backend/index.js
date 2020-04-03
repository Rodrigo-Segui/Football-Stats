const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Começando!');
});

app.listen(3333);