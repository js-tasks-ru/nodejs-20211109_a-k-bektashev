/**
 * 1. launch server
 * 2. make req
 * 3. wait for response
 * 4. check response
 * 5. server stop
 */

const server = require('./server');
const axios = require('axios');
const assert = require('assert');

describe('server', () => {
  before((done) => {
    server.listen(3000, done);
  });

  after((done)=> {
    server.close(done);
  });

  it('get request', async () => {
    const response = await axios.get('http://localhost:3000');
    return assert.strictEqual(response.data, 'Hello!');
  });

  it(('post request'), () => {

  });
});
