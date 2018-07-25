const assert = require('assert');
const app = require('../../src/app');

describe('\'Planes_&amp;_usuario\' service', () => {
  it('registered the service', () => {
    const service = app.service('planes_&amp;_usuario');

    assert.ok(service, 'Registered the service');
  });
});
