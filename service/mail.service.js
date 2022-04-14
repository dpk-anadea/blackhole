const nodemailer = require('nodemailer')

class MailService {
  constructor () {
    this.transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })
  }

  async sendActivationMail (to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Activation account ' + process.env.API_URL,
      text: '',
      html:
        `
          <div>
            <h1>Click link fro activation</h1>
            <a href="${link}">${link}</a>
          </div>
        `
    })
  }
}

module.exports = new MailService()
