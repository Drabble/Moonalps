const mailFrom = process.env.MAIL_FROM;
const mailTo = process.env.MAIL_TO;

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      strapi
        .service("api::mail.mail")
        .send(
          mailFrom,
          mailTo,
          "Welcome",
          `A product has been created ${JSON.stringify(result)}`
        );
      /*await strapi.plugins['email'].services.email.send(
                {
                    to: 'antoine.drabble@gmail.com',
                    from: 'noreply@moonalps.ch',
                    subject: 'You have a new message from the contact page',
                    text: `You received a message from ${result.name} phone ${result.phone} email ${result.email} message ${result.message}`
                }
            )*/
    } catch (err) {
      console.error(err);
    }
  },
};
