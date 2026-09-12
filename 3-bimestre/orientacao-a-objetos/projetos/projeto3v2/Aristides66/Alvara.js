class Alvara {
  constructor(estabelecimento) {
    this.estabelecimento = estabelecimento
  }

  emitir() {
    return `Alvará emitido para: ${this.estabelecimento}`
  }
}

class Comercial extends Alvara {
  emitir() {
    return `Alvará comercial emitido para: ${this.estabelecimento}`
  }
}

class Sanitario extends Alvara {
  emitir() {
    return `Alvará sanitário emitido para: ${this.estabelecimento}`
  }
}

class Bombeiro extends Alvara {
  emitir() {
    return `Alvará do corpo de bombeiros emitido para: ${this.estabelecimento}`
  }
}

Alvara.Alvara = Alvara
Alvara.Comercial = Comercial
Alvara.Sanitario = Sanitario
Alvara.Bombeiro = Bombeiro

module.exports = Alvara