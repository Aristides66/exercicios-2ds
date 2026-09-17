class Pagamento {
  #referencia
  #parcelas

  constructor(referencia, parcelas) {
    this.#referencia = referencia
    this.#parcelas = parcelas
  }

  get referencia() {
    return this.#referencia
  }

  get parcelas() {
    return this.#parcelas
  }

  resumo() {
    return "Pagamento registrado no sistema"
  }
}

module.exports = Pagamento