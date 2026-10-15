// servidor.js
const http = require("http")
const handler = require("./index")
const { carregarConfig } = require("./config")

const config = carregarConfig()

const server = http.createServer(handler)

server.listen(config.porta, () => {
  console.log(`Servidor rodando no ambiente '${config.ambiente}' em http://localhost:${config.porta}`)
})