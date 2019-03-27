import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /parcels requests', () => {
  it('should create a parcel delivery order if details are correct', (done) => {
    chai
      .request(app)
      .post('/api/v1/parcels')
      .send({
        weight: '23kg',
        pickupLocation: 'Sabo-Yaba, Lagos',
        destination: 'Adeola Odeku, VI, Lagos',
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.equal(201);
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.be.an('array');
        done(err);
      });
  });

  it('should return an error if no input is supplied', (done) => {
    chai
      .request(app)
      .post('/api/v1/parcels')
      .send({})
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(406);
        expect(res.body).to.have.property('error');
        done(err);
      });
  });

  it('should return an error if pickup location is empty', (done) => {
    chai
      .request(app)
      .post('/api/v1/parcels')
      .send({
        weight: '23kg',
        pickupLocation: '',
        destination: 'Adeola Odeku, VI, Lagos',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(406);
        expect(res.body).to.have.property('error');
        done(err);
      });
  });

  it('should return an error if destination is empty', (done) => {
    chai
      .request(app)
      .post('/api/v1/parcels')
      .send({
        weight: '23kg',
        pickupLocation: 'Sabo-Yaba, Lagos',
        destination: '',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(406);
        expect(res.body).to.have.property('error');
        done(err);
      });
  });

  it('should return an error if weight is empty', (done) => {
    chai
      .request(app)
      .post('/api/v1/parcels')
      .send({
        weight: '',
        pickupLocation: 'Sabo-Yaba, Lagos',
        destination: 'Adeola Odeku, VI, Lagos',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(406);
        expect(res.body).to.have.property('error');
        done(err);
      });
  });

  it('should return an error if latitude is empty');

  it.skip('should return an error if latitude is invalid', (done) => {
    chai
      .request(app)
      .post('/api/v1/red-flags')
      .send({
        type: 'red-flag',
        latitude: 'ghyshh',
        longitude: 'invalid',
        comment: 'Extortion at the embassy',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('error');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(406);
        done(err);
      });
  });

  it.skip('should return an error if longitude is empty', (done) => {
    chai
      .request(app)
      .post('/api/v1/red-flags')
      .send({
        type: 'red-flag',
        latitude: '6.5951139',
        longitude: '',
        comment: 'Extortion at the embassy',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('error');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(406);
        done(err);
      });
  });

  it.skip('should return an error if longitude is invalid', (done) => {
    chai
      .request(app)
      .post('/api/v1/red-flags')
      .send({
        type: 'red-flag',
        latitude: '6.5951139',
        longitude: 'ghjjs',
        comment: 'Extortion at the embassy',
      })
      .end((err, res) => {
        expect(res).to.have.status(406);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('error');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(406);
        done(err);
      });
  });
});

describe('GET /parcels requests', () => {
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
