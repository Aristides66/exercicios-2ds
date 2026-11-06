const express = require("express")
const router = express.Router()

const validarReparo = require("../middlewares/validarReparo")

// Array inicial de reparos
let reparos = [
    {
        id: 1,
        ciclista: "Ana",
        peca: "Pneu",
        valor: 90,
        situacao: "entregue"
    },
    {
        id: 2,
        ciclista: "Bruno",
        peca: "Corrente",
        valor: 65,
        situacao: "em bancada"
    },
    {
        id: 3,
        ciclista: "Carla",
        peca: "Guidao",
        valor: 150,
        situacao: "em bancada"
    }
]

// GET /reparos - Listar todos e aplicar filtros
router.get("/", (req, res) => {
    let resultado = [...reparos];

    const { situacao, valorMin } = req.query

    if (situacao) {
        resultado = resultado.filter(
            reparo => reparo.situacao === situacao
        )
    }

    if (valorMin !== undefined) {
        const minimo = Number(valorMin)

        resultado = resultado.filter(
            reparo => reparo.valor >= minimo
        )
    }

    res.status(200).json(resultado)
})

// GET /reparos/:id - Buscar reparo por ID
router.get("/:id", (req, res, next) => {
    const id = Number(req.params.id)

    const reparo = reparos.find(
        item => item.id === id
    )

    if (!reparo) {
        const erro = new Error("Reparo nao encontrado")
        erro.status = 404

        return next(erro)
    }

    res.status(200).json(reparo)
})

// POST /reparos - Criar novo reparo
router.post("/", validarReparo, (req, res) => {
    const { ciclista, peca, valor } = req.body

    const maiorId = reparos.reduce(
        (maior, reparo) => Math.max(maior, reparo.id),
        0
    )

    const novoReparo = {
        id: maiorId + 1,
        ciclista,
        peca,
        valor,
        situacao: "aberto"
    }

    reparos.push(novoReparo)

    res.status(201).json({
        mensagem: "Registro de reparo criado"
    })
})

module.exports = router