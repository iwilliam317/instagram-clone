const app = require('./config/server');

const server = app.listen(app.get('port'), () => {
  console.log('Server on!');
});

module.exports = server;