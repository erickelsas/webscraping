// src/server.ts
import fastify from "fastify";
import * as cheerio from "cheerio";
import axios from "axios";
var app = fastify();
app.get("/", (req, res) => {
  const url = "http://bianca.com/";
  axios(url).then((html) => {
    const $ = cheerio.load(html.data);
    res.status(200).send({ "h1": $("h1").text() });
  }).catch((err) => {
    res.status(500).send("Aconteceu um erro");
  });
});
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
