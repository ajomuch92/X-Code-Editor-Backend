// Initializes the `Archivos` service on path `/archivos`
const createService = require('feathers-mongodb');
const hooks = require('./archivos.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/archivos', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('archivos');

  mongoClient.then(db => {
    service.Model = db.collection('archivos');
  });

  service.hooks(hooks);
};
