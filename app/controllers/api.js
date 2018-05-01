
module.exports.methodGet = (app, req, res) => {
   const connection = app.config.dbConnection;
   let api = new app.app.models.api(connection);

   api.methodGet(res);

}

module.exports.methodPost = async (app, req, res) => {
   const connection = app.config.dbConnection; 
   let api = await new app.app.models.api(connection);
   let data = req.body;
   await api.methodPost(res, data);
}

module.exports.methodShow = async (app, req, res) => {
  const connection = app.config.dbConnection; 
  let api = await new app.app.models.api(connection);
  let id = req.params.id;
  await api.methodShow(res, id);

}