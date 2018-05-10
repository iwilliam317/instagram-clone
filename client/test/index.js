const app = require('../app');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);


describe('/client', () => {
  it('Check status - GET /', (done) => {

    chai.request(app).get('/')
      .end((error, response) => {
        expect(response).to.have.status(200);
        done();
      });
      
  });
});
