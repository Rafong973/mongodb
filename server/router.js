'use strict';

module.exports = function router(app){
	/** 路由 **/
	app.get('/',function (req,res){
		res.render('index',{authenticated:false});
	})

	app.get('/login',function(req,res){
		res.render('login');
	})

	app.get('/signup',function(req,res){
		res.render('signup');
	})
}