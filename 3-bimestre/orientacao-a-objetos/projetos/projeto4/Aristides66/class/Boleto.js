const Pagamento = require("./Pagamento")

class Boleto extends Pagamento {
  constructor(referencia, parcelas) {
    super(referencia, parcelas)
  }

  resumo() {
    return "Pagamento via boleto aprovado"
  }
}

module.exports = Boleto