"use strict";

/**
 * mail service.
 */

const nodemailer = require("nodemailer");
const mailUser = process.env.MAIL_USER;
const mailPassword = process.env.MAIL_PASSWORD;
const mailServer = process.env.MAIL_SERVER;
const mailPort = process.env.MAIL_PORT;
// Create reusable transporter object using SMTP transport.
const transporter = nodemailer.createTransport({
  host: mailServer,
  port: mailPort,
  auth: {
    user: mailUser,
    pass: mailPassword,
  },
});

module.exports = () => ({
  send: (from, to, subject, text) => {
    // Setup e-mail data.
    const options = {
      from,
      to,
      subject,
      text,
    };
    // Return a promise of the function that sends the email.
    return transporter.sendMail(options);
  },
});
