const nodemailer = require("nodemailer")

const usuario = "tonozzisite@gmail.com"
const senha = "carlostonozzi190875"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: usuario,
    pass: senha
  }
})

/**
 * Envia um email através de tonozzisite@gmail.com.
 *
 * @param {Array<string>} to Lista de destinatários para quem o email deve ser enviado
 * @param {string} subject Assunto
 * @param {string} html HTML do email
 * @returns {Promise<void>} Promessa que resolve quando o email for enviado e rejeita se der erro durante o envio
 */
const sendEmail = (to, subject, html) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail({ from: usuario, to, subject, html }, error => {
      if (error) reject(error)
      else resolve()
    })
  })
}

module.exports = { sendEmail }
