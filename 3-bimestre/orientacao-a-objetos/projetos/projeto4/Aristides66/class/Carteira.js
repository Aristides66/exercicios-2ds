class Carteira {
  #nome
  #categorias
  #membros

  constructor(nome) {
    this.#nome = nome
    this.#categorias = []
    this.#membros = []
  }

  get nome() {
    return this.#nome
  }

  get categorias() {
    return this.#categorias
  }

  get membros() {
    return this.#membros
  }

  adicionarCategoria(categoria) {
    this.#categorias.push(categoria)
  }

  adicionarMembro(membro) {
    this.#membros.push(membro)
  }
}

module.exports = Carteira