'use strict';

module.exports = function server(app){
	app.post('/login',function(res,req){
		console.log(res,req);
	})
}