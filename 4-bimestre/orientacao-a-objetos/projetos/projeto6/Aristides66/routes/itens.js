const express = require("express")
const router = express.Router()

const itens = [
    { id: 1, nome: "Parafuso", setor: "fixacao", preco: 2, emEstoque: true },
    { id: 2, nome: "Martelo", setor: "ferramenta", preco: 45, emEstoque: true },
    { id: 3, nome: "Furadeira", setor: "ferramenta", preco: 320, emEstoque: false }
]

router.get("/", (req, res) => {
    res.status(200).json(itens)
})

router.get("/em-estoque", (req, res) => {
    const disponiveis = itens.filter(item => item.emEstoque === true)

    res.status(200).json(disponiveis)
})

router.get("/total", (req, res) => {
    res.status(200).json({
        total: itens.length
    })
})

router.post("/", (req, res) => {
    res.status(201).json({
        mensagem: "Cadastro de item realizado"
    })
})

module.exports = router
