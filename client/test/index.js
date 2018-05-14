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

  describe('/home', () => {
    it('returns status code 200', () => {
      chai.request(app).get('/home')
        .end((error, response) => {          
          expect(response).to.have.status(200);
          expect(response.type).to.be.equal('text/html');
          expect(response.ok).to.be.true;
        });

    });
  });

  describe('wrong route', () => {
    it('returns status code 404', () => {
      chai.request(app).get('/test')
        .end((error, response) => {
          console.log(response)
          expect(response.status).to.equal(404);
          expect(response.error.text).to.be.equal('Parece haver um erro na sua solicitação, a página não foi encontrada!');
        });
    });
  });

});
