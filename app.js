const app = require('./config/server');

app.listen(app.get('port'), () => {
  console.log('Server on!');
});

// app.use((error, req, res, next) => {
//   res.status(500).send('Sorry! An error has occurred');
//   next();
// })



