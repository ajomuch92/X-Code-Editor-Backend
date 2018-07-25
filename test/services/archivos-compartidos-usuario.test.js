const assert = require('assert');
const app = require('../../src/app');

describe('\'Archivos_compartidos_&amp;_usuario\' service', () => {
  it('registered the service', () => {
    const service = app.service('archivos_compartidos_&amp;_usuario');

    assert.ok(service, 'Registered the service');
  });
});
