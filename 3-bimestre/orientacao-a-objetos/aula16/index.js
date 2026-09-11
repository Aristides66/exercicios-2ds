class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
  }

  apresentar() {
    return `${this.marca} ${this.modelo}`
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, portas) {
    super(marca, modelo)
    this.portas = portas
  }

  abrirPortas() {
    return "As portas do carro foram abertas"
  }
}

class Moto extends Veiculo {
  constructor(marca, modelo, cilindrada) {
    super(marca, modelo)
    this.cilindrada = cilindrada
  }

  empinar() {
    return "A moto está empinando"
  }
}

module.exports = {
  Veiculo,
  Carro,
  Moto
}
