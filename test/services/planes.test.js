const assert = require('assert');
const app = require('../../src/app');

describe('\'Planes\' service', () => {
  it('registered the service', () => {
    const service = app.service('planes');

    assert.ok(service, 'Registered the service');
  });
});
