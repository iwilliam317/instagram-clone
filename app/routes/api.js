module.exports = (application) => {

    application.post('/api', (req, res) => {
      application.app.controllers.api.methodPost(application, req, res)
    })

    application.get('/api', (req, res) => {
      application.app.controllers.api.methodGet(application, req, res);
    })

    application.get('/api/:id', (req, res) => {
      application.app.controllers.api.methodShow(application, req, res);
    })

    application.put('/api/:id', (req, res) => {
      application.app.controllers.api.methodPut(application, req, res);
    })

}