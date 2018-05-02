const request = require("request");

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
            request.get('http://localhost:3000/', (error, response, body) => {
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

    describe('GET /api', () => {
        it('returns status code 200', () => {
            request.get('http://localhost:3000/api', (error, response, body) => {
                expect(response.statusCode).toBe(200);
            });
        });

        it(`returns body 
            [{"_id": "5aea4e190824be0bcce654e3", "titulo": "hello", "imagem_url": "hello.jpg"      }]`, () => {
            request.get('http://localhost:3000/api', (error, response, body) => {
                expect(body).toBe('[{"_id":"5aea4e190824be0bcce654e3","titulo":"hello","imagem_url":"hello.jpg"}]');
            });
        });
    });

});