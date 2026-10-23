const express = require("express")
const router = express.Router()

const clientes = [
    { id: 1, nome: "Ana", tipo: "obra" },
    { id: 2, nome: "Bruno", tipo: "varejo" }
]

router.get("/", (req, res) => {
    res.status(200).json(clientes)
})

router.get("/total", (req, res) => {
    res.status(200).json({
        total: clientes.length
    })
})

module.exports = router
