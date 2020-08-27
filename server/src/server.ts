import express from 'express';

const app = express();

app.listen(3333, () => {
    console.log('Servidor executando em http://localhost:3333');
});