const express = require("express")
const router = express.Router()

const itensRouter = require("./itens")
const clientesRouter = require("./clientes")

router.get("/", (req, res) => {
    res.status(200).json({
        mensagem: "API de Ferragem"
    })
})

router.use("/itens", itensRouter)
router.use("/clientes", clientesRouter)

module.exports = router
