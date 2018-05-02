
module.exports.methodGet = (application, request, response) => {
     const connection = application.config.dbConnection;
     let api = new application.app.models.api(connection);
     api.methodGet(response);

}

module.exports.methodPost = async (application, request, response) => {
     const connection = application.config.dbConnection; 
     let api = await new application.app.models.api(connection);
     let data = request.body;
     await api.methodPost(response, data);
}

module.exports.methodShow = async (application, request, response) => {
    const connection = application.config.dbConnection; 
    let api = await new application.app.models.api(connection);
    let id = request.params.id;
    await api.methodShow(response, id);
}

module.exports.methodPut = async (application, request, response) => {
    const connection = application.config.dbConnection; 
    let api = await new application.app.models.api(connection);
    let id = request.params.id;
    await api.methodPut(request, response, id);
}

module.exports.methodDelete = (application, request, response) => {
    const connection = application.config.dbConnection;
    let api = new application.app.models.api(connection);
    let id = request.params.id;
    api.methodDelete(request, response, id);
}
