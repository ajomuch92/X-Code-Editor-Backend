const assert = require('assert');
const app = require('../../src/app');

describe('\'tipos_usuarios\' service', () => {
  it('registered the service', () => {
    const service = app.service('tipos-usuarios');

    assert.ok(service, 'Registered the service');
  });
});
