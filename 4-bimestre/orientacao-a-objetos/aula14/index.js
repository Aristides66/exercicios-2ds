
const fs = require("fs/promises")

const ARQUIVO = process.env.ARQUIVO_CONTATOS || "contatos.json"

async function listar() {
  try {
    const dados = await fs.readFile(ARQUIVO, "utf8")
    return JSON.parse(dados)
  } catch (erro) {
    if (erro.code === "ENOENT") {
      return []
    }

    throw erro
  }
}

async function salvar(contato) {
  const lista = await listar()

  lista.push(contato)

  await fs.writeFile(ARQUIVO, JSON.stringify(lista, null, 2))

  return contato
}

async function buscarPorNome(nome) {
  const lista = await listar()

  return lista.find(contato => contato.nome === nome) || null
}

module.exports = { listar, salvar, buscarPorNome }
