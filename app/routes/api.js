module.exports = (app) => {

    app.post('/api', (req, res) => {
      app.app.controllers.api.methodPost(app, req, res)
    })

    app.get('/api', (req, res) => {
      app.app.controllers.api.methodGet(app, req, res);
    })

    app.get('/api/:id', (req, res) => {
      app.app.controllers.api.methodShow(app, req, res);
    })

}