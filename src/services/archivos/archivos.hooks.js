

const prepararArchivo = require('../../hooks/preparar-archivo');

const populateArchivos = require('../../hooks/populate-archivos');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [prepararArchivo()],
    update: [prepararArchivo()],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [populateArchivos()],
    get: [populateArchivos()],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
