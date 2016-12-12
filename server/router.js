'use strict';

module.exports = function router(app){
	/** 路由 **/
	app.get('/',function (req,res){
		res.render('index');
	})

	app.get('/system',function(req,res){
		res.render('system');
	})

}