const express = require("express")
const app = express()

app.use(express.json())

const pedidos = [
  { id: 1, cliente: "Ana", valor: 100 },
  { id: 2, cliente: "Bruno", valor: 250 }
]

function validarPedido(req, res, next) {
  const { cliente, valor } = req.body

  if (!cliente) {
    return res.status(400).json({ erro: "O campo cliente e obrigatorio" })
  }

  if (typeof valor !== "number") {
    return res.status(400).json({ erro: "O campo valor deve ser um numero" })
  }

  next()
}

app.get("/pedidos", (req, res) => {
  const { valorMin } = req.query

  if (valorMin !== undefined) {
    const min = Number(valorMin)
    const filtrados = pedidos.filter(pedido => pedido.valor >= min)
    return res.json(filtrados)
  }

  res.json(pedidos)
})

app.get("/pedidos/:id", (req, res, next) => {
  const id = Number(req.params.id)
  const pedido = pedidos.find(p => p.id === id)

  if (!pedido) {
    const erro = new Error("Pedido nao encontrado")
    erro.status = 404
    return next(erro)
  }

  res.json(pedido)
})

app.post("/pedidos", validarPedido, (req, res) => {
  const { cliente, valor } = req.body
  const novoPedido = { id: pedidos.length + 1, cliente, valor }
  pedidos.push(novoPedido)

  res.status(201).json({ mensagem: "Pedido criado" })
})

app.use((erro, req, res, next) => {
  const status = erro.status || 500
  res.status(status).json({ erro: erro.message })
})

module.exports = app