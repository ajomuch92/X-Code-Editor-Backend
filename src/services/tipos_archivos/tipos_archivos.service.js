// Initializes the `tipos_archivos` service on path `/tipos-archivos`
const createService = require('feathers-mongodb');
const hooks = require('./tipos_archivos.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/tipos-archivos', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('tipos-archivos');

  mongoClient.then(db => {
    service.Model = db.collection('tipos_archivos');
  });

  service.hooks(hooks);
};
