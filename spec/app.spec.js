const request = require("request");

const base_url = "http://localhost:3000/";

describe('routes', () => {

  let server;

  beforeAll(() => {
    server = require('../app');
  });

  afterAll(() => {
    server.close();
  });

  describe('GET /', () => {
    it('returns status code 200 ', (done) => {
      request.get(base_url, (error, response, body) => {
        expect(response.statusCode).toEqual(200);
        done();
      });
    });

    it('returns ', (done)=> {
      request.get(base_url, (error, response, body) => {
        expect(body).toEqual('{"msg":"hello, welcome!"}');
        done();
      })
    });

  });

});