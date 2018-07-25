// Initializes the `Mensajes_&amp;_archivo` service on path `/mensajes_&amp;_archivo`
const createService = require('feathers-mongodb');
const hooks = require('./mensajes-archivo.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/mensajes_&amp;_archivo', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('mensajes_&amp;_archivo');

  mongoClient.then(db => {
    service.Model = db.collection('mensajes-archivo');
  });

  service.hooks(hooks);
};
