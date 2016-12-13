'use strict';

var user = require('./mongo');

module.exports = function server(app,body){
	app.post('/login',body.urlencoded(),function(req,res){
		const data = req.body;
		const db = user.Kitten;
		var msg = "";
		if (!data) return res.sendStatus(400);
		db.find({},function(err,docs){
			for(var i=0;i<docs.length;i++){
				console.log(docs[i]);
				if(docs[i].name == data.u){
					msg = {status:0,msg:"no this user"};
					break;
				}else{
					msg = {status:1,msg:"u r welcome"};
				}
			}
			res.send(msg);
		});
		console.log(msg);
	})
}