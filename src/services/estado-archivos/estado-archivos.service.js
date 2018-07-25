// Initializes the `estado_archivos` service on path `/estado-archivos`
const createService = require('feathers-mongodb');
const hooks = require('./estado-archivos.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/estado-archivos', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('estado-archivos');

  mongoClient.then(db => {
    service.Model = db.collection('estado-archivos');
  });

  service.hooks(hooks);
};
