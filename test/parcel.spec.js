import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET red-flag requests', () => {
  it('should retrieve the list of all parcel delivery orders', (done) => {
    chai
      .request(app)
      .get('/api/v1/parcels')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(200);
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.be.an('array');
        done(err);
      });
  });

  it('should retrieve the specific parcel with given ID', (done) => {
    chai
      .request(app)
      .get('/api/v1/parcels/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.be.an('array');
        done(err);
      });
  });

  it('should return an error if parcel ID does not exist', (done) => {
    chai
      .request(app)
      .get('/api/v1/parcels/10')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(404);
        expect(res.body).to.have.property('error');
        // expect(res.body.error).to.equal('parcel does not exist');
        done(err);
      });
  });

  it('should return an error if parcel ID is invalid', (done) => {
    chai
      .request(app)
      .get('/api/v1/parcels/ty')
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(406);
        expect(res.body).to.have.property('error');
        done(err);
      });
  });
});
