const express = require('express');
const app = express();

app.get('/', (req, res) => {
<<<<<<< HEAD
    res.send('Olá, mundo! 2');
}
);

app.listen(4001, () => {
    console.log('Servidor rodando na porta 4001');
=======
    res.send('Olá, mundo!');
}
);

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
>>>>>>> 47aad84f9f041f6dd5cc9a6d23151133fe643811
});