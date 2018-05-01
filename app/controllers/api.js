
module.exports.methodGet = (app, req, res) => {
   const connection = app.config.dbConnection;
   let api = new app.app.models.api(connection);

   api.methodGet(res);

}

module.exports.methodPost = async (app, req, res, data) => {
   const connection = app.config.dbConnection; 
   let api = await new app.app.models.api(connection);
   await api.methodPost(res, data);
}