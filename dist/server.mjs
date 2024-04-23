var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// src/server.ts
import fastify from "fastify";
import * as cheerio from "cheerio";
var app = fastify();
var rp = __require("request-promise");
app.get("/", (req, res) => {
  const url = "http://bianca.com/";
  rp(url).then((html) => {
    const $ = cheerio.load(html);
    res.status(200).send({ "h1": $("h1").text() });
  }).catch((err) => {
    res.status(500).send("Aconteceu um erro");
  });
});
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
