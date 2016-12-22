'use strict';

export default function router(app){
	/** 路由 **/
	app.get('/',(req,res) => {
		res.render('index');
	})

	app.get('/system',(req,res) => {
		console.log(req.session);
		res.render('system');
	})

}