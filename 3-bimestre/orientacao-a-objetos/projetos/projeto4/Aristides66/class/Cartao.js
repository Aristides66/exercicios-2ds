const Pagamento = require("./Pagamento")

class Cartao extends Pagamento {
  constructor(referencia, parcelas) {
    super(referencia, parcelas)
  }

  resumo() {
    return "Pagamento via cartão aprovado"
  }
}

module.exports = Cartao