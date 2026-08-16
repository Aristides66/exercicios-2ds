class Cofre {
    #codigo
    
    constructor(codigo){
        this.#codigo = codigo
    }
    verificarCodigo(codigo) {
        return codigo === this.#codigo
    }
}

const cofre = new Cofre("1234")

module.exports = cofre