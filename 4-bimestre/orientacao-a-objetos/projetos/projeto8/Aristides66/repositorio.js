
const fs = require('fs/promises')

const ARQUIVO = process.env.ARQUIVO_INGRESSOS || 'ingressos.json'

async function listar() {
  try {
    const conteudo = await fs.readFile(ARQUIVO, 'utf-8')
    return JSON.parse(conteudo)
  } catch (erro) {
    if (erro.code === 'ENOENT') {
      return []
    }

    throw erro
  }
}

async function salvar(ingresso) {
  const lista = await listar()

  lista.push(ingresso)

  await fs.writeFile(
    ARQUIVO,
    JSON.stringify(lista, null, 2)
  )

  return ingresso
}

async function atualizar(id, dados) {
  const lista = await listar()

  const indice = lista.findIndex(ingresso => ingresso.id === id)

  if (indice === -1) {
    return null
  }

  lista[indice] = {
    ...lista[indice],
    ...dados,
    id: lista[indice].id
  }

  await fs.writeFile(
    ARQUIVO,
    JSON.stringify(lista, null, 2)
  )

  return lista[indice]
}

async function remover(id) {
  const lista = await listar()

  const indice = lista.findIndex(ingresso => ingresso.id === id)

  if (indice === -1) {
    return false
  }

  lista.splice(indice, 1)

  await fs.writeFile(
    ARQUIVO,
    JSON.stringify(lista, null, 2)
  )

  return true
}

module.exports = {
  listar,
  salvar,
  atualizar,
  remover
}
