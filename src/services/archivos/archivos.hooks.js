

const prepararArchivo = require('../../hooks/preparar-archivo');

const populateArchivos = require('../../hooks/populate-archivos');

const populateArchivo = require('../../hooks/populate-archivo');

const updatedAt = require('../../hooks/updated-at');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [prepararArchivo()],
    update: [prepararArchivo(), updatedAt()],
    patch: [updatedAt()],
    remove: []
  },

  after: {
    all: [],
    find: [populateArchivos()],
    get: [populateArchivo()],
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
