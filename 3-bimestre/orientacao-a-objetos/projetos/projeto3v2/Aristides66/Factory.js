const { Comercial, Sanitario, Bombeiro } = require('./Alvara')

class Factory {
  static criar(tipo, estabelecimento) {
    if (tipo === 'comercial') {
      return new Comercial(estabelecimento)
    }

    if (tipo === 'sanitario') {
      return new Sanitario(estabelecimento)
    }

    if (tipo === 'bombeiro') {
      return new Bombeiro(estabelecimento)
    }

    throw new Error('Tipo de alvará inválido')
  }
}

module.exports = Factory
module.exports.criar = Factory.criar