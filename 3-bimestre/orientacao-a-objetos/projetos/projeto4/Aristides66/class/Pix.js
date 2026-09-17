const Pagamento = require("./Pagamento")

class Pix extends Pagamento {
  #registros

  constructor(referencia, parcelas) {
    super(referencia, parcelas)
    this.#registros = []
  }

  get registros() {
    return this.#registros
  }

  adicionarRegistro(transacao) {
    this.#registros.push(transacao)
  }

  resumo() {
    return "Pagamento via Pix aprovado"
  }
}

module.exports = Pix