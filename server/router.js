'use strict';

export default function router(app){
	/** 路由 **/
	app.get('/',(req,res) => {
		res.render('index');
	})

	app.get('/system',(req,res) => {
		res.render('system');
		if(!req.session.i){
			req.session.i = 0;
		}
	});
	
	app.get('/query',(req,res) => {
		res.render('query');
	})

}