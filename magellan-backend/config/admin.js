module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'edc438bb790ba94846ad6221989f78a6'),
  },
});
