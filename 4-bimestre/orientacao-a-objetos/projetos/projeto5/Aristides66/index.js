const { carregarConfig } = require("./config")

function handler(req, res) {
  const config = carregarConfig()
  const url = req.url

  if (url === "/") {
    res.statusCode = 200
    if (typeof res.setHeader === "function") {
      res.setHeader("Content-Type", "text/plain")
    }
    res.end(`Status do servico: ${config.servico}`)
  } else if (url === "/batida") {
    res.statusCode = 200
    if (typeof res.setHeader === "function") {
      res.setHeader("Content-Type", "text/plain")
    }
    res.end("batida")
  } else if (url === "/status") {
    res.statusCode = 200
    if (typeof res.setHeader === "function") {
      res.setHeader("Content-Type", "application/json")
    }
    const resposta = {
      online: true,
      servico: config.servico,
      porta: config.porta,
      ambiente: config.ambiente
    }
    res.end(JSON.stringify(resposta))
  } else {
    res.statusCode = 404
    if (typeof res.setHeader === "function") {
      res.setHeader("Content-Type", "text/plain")
    }
    res.end("Rota nao encontrada")
  }
}

module.exports = handler