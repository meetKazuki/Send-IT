import chai from 'chai';
import request from 'supertest';
import app from '../server';

const { expect } = chai.expect;

describe('API Integration Tests', () => {
  describe('GET / parcels', () => {
    it('should return all parcels', (done) => {
      request(app)
        .get('/api/v1/parcels')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.a('Array');
          done();
        });
    });
  });
});
