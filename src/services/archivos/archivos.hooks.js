

const uploadFile = require('../../hooks/upload-file');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [uploadFile()],
    update: [uploadFile()],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
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
