module.exports = (application) => {

    application.post('/api', (request, response) => {
        application.app.controllers.api.methodPost(application, request, response)
    });

    application.get('/api', (request, response) => {
        application.app.controllers.api.methodGet(application, request, response);
    });

    application.get('/api/:id', (request, response) => {
        application.app.controllers.api.methodShow(application, request, response);
    });

    application.put('/api/:id', (request, response) => {
        application.app.controllers.api.methodPut(application, request, response);
    });

    application.delete('/api/:id', (request, response) => {
        application.app.controllers.api.methodDelete(application, request, response);
    });

    application.get('/uploads/:image', (request, response) => {
        application.app.controllers.api.getImage(application, request, response);
    });
}