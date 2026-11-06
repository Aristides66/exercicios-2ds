function validarReparo(req, res, next) {
    const { ciclista, peca, valor } = req.body

    if (!ciclista) {
        return res.status(400).json({
            erro: "O campo ciclista e obrigatorio"
        })
    }

    if (!peca) {
        return res.status(400).json({
            erro: "O campo peca e obrigatorio"
        })
    }

    if (typeof valor !== "number" || Number.isNaN(valor)) {
        return res.status(400).json({
            erro: "O campo valor deve ser um numero"
        })
    }

    if (valor <= 0) {
        return res.status(400).json({
            erro: "O campo valor deve ser maior que zero"
        })
    }

    next()
}

module.exports = validarReparo