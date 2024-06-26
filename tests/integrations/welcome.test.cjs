const request = require('supertest');
const app = require('../../app.js');

describe('GET /hello', () => {
  it('responds with Welcome message', (done) => {
    request(app)
      .get('/hello')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        if (!('message' in res.body)) throw new Error("Missing 'message' key");
        if (res.body.message !== 'Hello world :3') throw new Error(`Unexpected message: ${res.body.message}`);
      })
      .end(done);
  });
});
