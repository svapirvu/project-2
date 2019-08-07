const request = require('supertest');
const app = require('../routes/app');

describe('GET /products', function() {
    it('Response status is successful', function(done) {
      request(app)
        .get('/products')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });
  