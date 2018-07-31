// Initializes the `Archivos` service on path `/archivos`
// const createService = require('feathers-mongodb');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./public/uploads');
const hooks = require('./uploads.hooks');

module.exports = function (app) {
  app.use('/uploads', blobService({Model: blobStorage}));
  const service = app.service('uploads');
  service.hooks(hooks);
};
