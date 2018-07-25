// Initializes the `Planes` service on path `/planes`
const createService = require('feathers-mongodb');
const hooks = require('./planes.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/planes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('planes');

  mongoClient.then(db => {
    service.Model = db.collection('planes');
  });

  service.hooks(hooks);
};
