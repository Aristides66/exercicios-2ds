const Pix = require("./Pix")
const Cartao = require("./Cartao")
const Boleto = require("./Boleto")

class PagamentoFactory {
  static criar(tipo, referencia, parcelas) {
    switch (tipo.toLowerCase()) {
      case "pix":
        return new Pix(referencia, parcelas)
      case "cartao":
        return new Cartao(referencia, parcelas)
      case "boleto":
        return new Boleto(referencia, parcelas)
      default:
        throw new Error("Tipo de pagamento inválido")
    }
  }
}

module.exports = PagamentoFactory