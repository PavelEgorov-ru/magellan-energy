module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '21ccfcf86e6587af64b664c34f00fa72'),
  },
});
