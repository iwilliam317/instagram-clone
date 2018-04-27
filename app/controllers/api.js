module.exports._get = (app, req, res) => {
   const connection = app.config.dbConnection;
   // res.json('sdsds')

  let api = new app.app.models.api(connection)
  // res.json('asddas')
   api._get(res);

}