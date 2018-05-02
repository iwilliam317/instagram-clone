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

        let data = {};

        beforeAll((done) => {
            request.get(base_url, (error, response, body) => {
                data.statusCode = response.statusCode;
                data.body = body;
                done();
            });
        });

        it('returns status code 200 ', () => {      
            expect(data.statusCode).toEqual(200);
        });

        it('returns body {"msg":"hello, welcome!"}', ()=> {
            expect(data.body).toEqual('{"msg":"hello, welcome!"}');
        });

    });

});