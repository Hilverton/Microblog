import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

dotenv.config();

const app = express();

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-9pzue.mongodb.net/microblog-twitter?retryWrites=true&w=majority`;
mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('Servidor executando em http://localhost:3333');
});