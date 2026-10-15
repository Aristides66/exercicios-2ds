// config.js
function carregarConfig() {
  return {
    servico: process.env.SERVICO || "academia",
    porta: Number(process.env.PORT) || 3000,
    ambiente: process.env.AMBIENTE || "desenvolvimento"
  }
}

module.exports = { carregarConfig }