const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Olá, mundo! 2');
}
);

app.listen(4001, () => {
    console.log('Servidor rodando na porta 4001');
});