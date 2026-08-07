class Funcionarios{
    constructor(nome, cargo, salario){
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }
}

const funcionarioAri = new Funcionarios("João", "Desenvolvedor", 5000)

module.exports = funcionarioAri