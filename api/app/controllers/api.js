
const fs = require('fs');

module.exports.methodGet = (application, request, response) => {
     
     const connection = application.config.dbConnection;
     let api = new application.app.models.api(connection);
     api.methodGet(response);

}

module.exports.methodPost = async (application, request, response) => {

     // console.log(request.files);

     let timestamp = new Date();
     timestamp = timestamp.getTime();

     const uniqueFilename = `${timestamp}_${request.files.arquivo.originalFilename}`;

     const originPath = request.files.arquivo.path;
     const destinationPath = `./uploads/${uniqueFilename}`; 

     fs.rename(originPath, destinationPath, error => {
        if (error)
            return response.status(500).json({ error: error })
     });

     const connection = application.config.dbConnection; 
     let api = await new application.app.models.api(connection);

     let data = {
        titulo: request.body.titulo,
        url_imagem: uniqueFilename
     }

     console.log(data);
     await api.methodPost(response, data);
}

module.exports.methodShow = async (application, request, response) => {
    const connection = application.config.dbConnection; 
    let api = await new application.app.models.api(connection);
    let id = request.params.id;
    await api.methodShow(response, id);
}

module.exports.methodPut = async (application, request, response) => {
    // response.send(request.body.comment);
    const connection = application.config.dbConnection; 
    let api = await new application.app.models.api(connection);
    let id = request.params.id;
    await api.methodPut(request, response, id);
}

module.exports.methodDelete = (application, request, response) => {
   response.send(request.params.id)
    // const connection = application.config.dbConnection;
    // let api = new application.app.models.api(connection);
    // let id = request.params.id;
    // api.methodDelete(request, response, id);
}

module.exports.getImage = (application, request, response) => {
    const image = request.params.image;
    // response.send('../../uploads/'+image)
    fs.readFile(`./uploads/${image}`, (error, content) => {
        if (error)
            return response.status(400).json(error);

        response.writeHead(200, {'content-type' : 'image/jpg'});
        response.end(content);
    });
}