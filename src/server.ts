import fastify from "fastify";
import * as cheerio from 'cheerio'
import axios from "axios";

const app = fastify();



app.get('/', (req, res) => {
    const url = 'http://bianca.com/';

    axios(url)
    .then((html: any) => {
        const $ = cheerio.load(html.data)
        res.status(200).send({ "h1":$("h1").text() })
    })
    .catch((err: any) => {
        res.status(500).send('Aconteceu um erro')
    })
})

app.listen({ port: 3333, host:'0.0.0.0'}).then(() => {
    console.log('HTTP server running!')
});