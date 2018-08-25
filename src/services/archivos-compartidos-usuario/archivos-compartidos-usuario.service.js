// Initializes the `Archivos_compartidos_&amp;_usuario` service on path `/archivos_compartidos_&amp;_usuario`
const createService = require('feathers-mongodb');
const hooks = require('./archivos-compartidos-usuario.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/archivos_compartidos_usuario', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('archivos_compartidos_usuario');

  mongoClient.then(db => {
    service.Model = db.collection('archivos-compartidos-usuario');
  });

  service.hooks(hooks);
};
