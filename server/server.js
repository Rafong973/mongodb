'use strict';

var user = require('./mongo');
var insert = require('./insert');
/**数据库写入操作

*insert(mongo.Kitten,{name:'name',password:'hello'});

**/

module.exports = function server(app,body){
	const db = user.Admin;
	app.post('/login',body.urlencoded(),function(req,res){
		const data = req.body;
		var msg = "";
		if (!data) return res.sendStatus(400);
		db.find({name:data.u},function(err,docs){
			if(!docs){
				msg = {status:0,msg:"no this user"};
			}else{
				msg = {status:1,msg:"u r welcome"};
			}
			res.send(msg);
		});
	})
	app.post('/sign',body.urlencoded(),function(req,res){
		const data = req.body;
		var msg = "";
		if (!data) return res.sendStatus(400);
	
	})
}