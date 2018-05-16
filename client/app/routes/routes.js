module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.index(application, req, res);
	});

	application.get('/home', function(req, res){
		application.app.controllers.home.home(application, req, res);
	});

    // route for testing only
    application.get('/hello_world', (req, res) => {
        res.send({ msg: 'hello world' });
    }); 

    // route for testing only
    application.post('/hello_world', (req, res) => {
      res.send({ data: req.body })
    });
}