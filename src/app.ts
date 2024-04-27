import express from "express";
import config from 'config';
import router from "./router";
import db from '../config/db';

const port = config.get<number>('port');

const app = express();

app.use(express.json());

app.use('/api/', router);

app.listen(port, async() => {
    await db();


    console.log(`A aplicação está funcionado na porta: ${port}`);
})