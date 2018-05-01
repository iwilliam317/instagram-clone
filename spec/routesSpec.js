const request = require("request");
const app = require("../app.js")
const base_url = "http://localhost:3000/"

describe('routes', () => {
  describe('/', () => {
    it('returns status code 200 ', () => {
      request.get(base_url, (error, response, body) => {
        expect(response.statusCode).toEqual(200);
      })
    })

  })
})