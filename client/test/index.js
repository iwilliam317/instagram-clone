const app = require('../app');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);


describe('client', () => {

  describe('/', () => {
    it('returns status 200', (done) => {
      chai.request(app).get('/')
        .end((error, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.a('object');
          done();
        });        
    });
  });

  describe('/hello_world', () => {
    it('returns a hello world', (done) => {
      chai.request(app).get('/hello_world')
        .end((error, response) => {
          expect(response.body.msg).to.be.equal('hello world');
          done();
        });
    });
  });

});
