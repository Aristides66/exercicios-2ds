class Loja {
  #nome
  #taxa

  constructor(nome, taxa) {
    this.#nome = nome
    this.#taxa = taxa
  }

  get nome() {
    return this.#nome
  }

  get taxa() {
    return this.#taxa
  }
}

module.exports = Loja