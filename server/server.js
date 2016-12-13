'use strict';

module.exports = function server(app,body){
	app.post('/login',body.urlencoded(),function(req,res){
		console.log(body)
		console.log(req.body);
		res.send('welcome')
	})
}