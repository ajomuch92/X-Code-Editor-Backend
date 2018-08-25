const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

const preProcessUser = require('../../hooks/pre-process-user');

const postProcessUser = require('../../hooks/post-process-user');

const patchUserHook = require('../../hooks/patch-user-hook');

const deleteUserHook = require('../../hooks/delete-user-hook');

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [hashPassword(), preProcessUser()],
    update: [hashPassword(), authenticate('jwt'), preProcessUser()],
    patch: [hashPassword(), authenticate('jwt'), patchUserHook()],
    remove: [authenticate('jwt'), deleteUserHook()]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [],
    get: [postProcessUser()],
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
