import fastify from "fastify";
import * as cheerio from 'cheerio'

const app = fastify();

const rp = require('request-promise');

app.get('/', (req, res) => {
    const url = 'http://bianca.com/';

    rp(url)
    .then((html: any) => {
        const $ = cheerio.load(html)
        res.status(200).send({ "h1":$("h1").text() })
    })
    .catch((err: any) => {
        res.status(500).send('Aconteceu um erro')
    })
})

app.listen({ port: 3333, host:'0.0.0.0'}).then(() => {
    console.log('HTTP server running!')
});