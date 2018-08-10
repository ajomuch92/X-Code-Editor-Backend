const assert = require('assert');
const app = require('../../src/app');

describe('\'tipos_archivos\' service', () => {
  it('registered the service', () => {
    const service = app.service('tipos-archivos');

    assert.ok(service, 'Registered the service');
  });
});
