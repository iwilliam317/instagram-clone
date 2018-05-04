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

        let data = {};

        beforeAll((done) => {
            request.get('http://localhost:3000/api', (error, response, body) => {
                data.statusCode = response.statusCode;
                data.body = body;
                done();
            });
        });

        it('returns status code 200', () => {           
                expect(data.statusCode).toBe(200);           
        });

        it(`returns body 
            [{"_id": "5aea4e190824be0bcce654e3", "titulo": "hello", 
            "imagem_url": "hello.jpg"
            }]`, () => {           
                expect(data.body).toBe('[{"_id":"5aea4e190824be0bcce654e3","titulo":"hello","imagem_url":"hello.jpg"}]');
            });
    });

    describe('GET /api:id', () => {
        
        let data = {};

        beforeAll((done) => {
            request.get('http://localhost:3000/api/5aea4e190824be0bcce654e3', (error, response, body) => {
                data.statusCode = response.statusCode;
                data.body = response.body;
                done();
            });
        });

        it('returns status code 200', () => {
            expect(data.statusCode).toBe(200);
        });

        it('returns [{"_id":"5aea4e190824be0bcce654e3","titulo":"hello","imagem_url":"hello.jpg"}]' , () =>{
            expect(data.body).toEqual('[{"_id":"5aea4e190824be0bcce654e3","titulo":"hello","imagem_url":"hello.jpg"}]');
        });

    });

});