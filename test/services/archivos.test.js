const assert = require('assert');
const app = require('../../src/app');

describe('\'Archivos\' service', () => {
  it('registered the service', () => {
    const service = app.service('archivos');

    assert.ok(service, 'Registered the service');
  });
});
