// Initializes the `tipos_usuarios` service on path `/tipos-usuarios`
const createService = require('feathers-mongodb');
const hooks = require('./tipos-usuarios.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/tipos-usuarios', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('tipos-usuarios');

  mongoClient.then(db => {
    service.Model = db.collection('tipos-usuarios');
  });

  service.hooks(hooks);
};
