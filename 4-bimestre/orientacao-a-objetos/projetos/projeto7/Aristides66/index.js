const express = require("express")

const reparosRouter = require("./routes/reparos")

const app = express()


app.use(express.json())


app.use("/reparos", reparosRouter)

// Rota para caminhos inexistentes
app.use((req, res) => {
    res.status(404).json({
        erro: "Rota nao encontrada"
    })
})

app.use((erro, req, res, next) => {
    const status = erro.status || 500

    res.status(status).json({
        erro: erro.message || "Erro interno do servidor"
    })
})

module.exports = app