const hooks = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [hooks.disallow()],
    patch: [hooks.disallow()],
    remove: [hooks.disallow()]
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
