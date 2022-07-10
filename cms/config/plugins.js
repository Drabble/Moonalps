module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendmail',
        settings: {
          defaultFrom: 'noreply@moonalps.ch',
          defaultReplyTo: 'noreply@moonalps.ch',
        },
      },
    },
  });