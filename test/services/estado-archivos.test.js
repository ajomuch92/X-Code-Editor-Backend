const assert = require('assert');
const app = require('../../src/app');

describe('\'estado_archivos\' service', () => {
  it('registered the service', () => {
    const service = app.service('estado-archivos');

    assert.ok(service, 'Registered the service');
  });
});
