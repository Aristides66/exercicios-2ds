const Notificacao = require("./Notificacao")
// CRIE SUA SOLUÇÃO ABAIXO ================

const {
  NotificacaoEmail,
  NotificacaoSMS,
  NotificacaoApp
} = require("./notificacao")

class NotificacaoFactory {
  static criar(tipo, mensagem) {
    switch (tipo) {
      case "email":
        return new NotificacaoEmail(mensagem)

      case "sms":
        return new NotificacaoSMS(mensagem)

      case "app":
        return new NotificacaoApp(mensagem)

      default:
        throw new Error("Tipo de notificação inválido")
    }
  }
}

module.exports = NotificacaoFactory





// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = Factory