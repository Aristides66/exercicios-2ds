class Transacao {
  #valor
  #loja

  constructor(valor, loja) {
    this.#valor = valor
    this.#loja = loja
  }

  get valor() {
    return this.#valor
  }

  get loja() {
    return this.#loja
  }
}

module.exports = Transacao