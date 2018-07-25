// Initializes the `Planes_&amp;_usuario` service on path `/planes_&amp;_usuario`
const createService = require('feathers-mongodb');
const hooks = require('./planes-usuario.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/planes_&amp;_usuario', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('planes_&amp;_usuario');

  mongoClient.then(db => {
    service.Model = db.collection('planes-usuario');
  });

  service.hooks(hooks);
};
