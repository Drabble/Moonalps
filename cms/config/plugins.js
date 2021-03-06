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
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  });