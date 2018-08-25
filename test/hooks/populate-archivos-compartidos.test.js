const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const populateArchivosCompartidos = require('../../src/hooks/populate-archivos-compartidos');

describe('\'populate-archivos-compartidos\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      after: populateArchivosCompartidos()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
