
function handler(req, res) {
    const porta = Number(process.env.PORT || 3000)

    if (req.url === "/") {
        res.statusCode = 200
        res.end("API no ar")
    } 
    else if (req.url === "/status") {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")

        const resposta = {
            status: "online",
            porta: porta
        };

        res.end(JSON.stringify(resposta))
    } 
    else {
        res.statusCode = 404
        res.end("Rota nao encontrada")
    }
}

module.exports = handler
