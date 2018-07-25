const assert = require('assert');
const app = require('../../src/app');

describe('\'Mensajes_&amp;_archivo\' service', () => {
  it('registered the service', () => {
    const service = app.service('mensajes_&amp;_archivo');

    assert.ok(service, 'Registered the service');
  });
});
