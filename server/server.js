'use strict';

const user = require('./mongo');
const cry = require('crypto');
const db = user.Admin;
const vail = 'adminpd123';

/**数据库写入操作

*insert(mongo.Kitten,{name:'name',password:'hello'});

**/

module.exports = function server(app,body){
	app.post('/login',body.urlencoded(),function(req,res){
		const data = req.body;
		let msg = '';
		if (!data) return res.sendStatus(400);
		db.find({admin:data.u},function(err,docs){
			if(docs.length <= 1){
				msg = {status:0,msg:'no this user'};
			}else{
				msg = {status:1,msg:'u r welcome'};
			}
			res.send(msg);
		});
	})
	app.post('/sign',body.urlencoded(),function(req,res){
		const data = req.body;
		let msg = '';
		if (!data) return res.sendStatus(400);
		if(data.validation != vail) return res.send({status:4,msg:'the admin is error'})
		db.find({admin:data.admin},function(err,docs){
			if(err) res.send({status:3,msg:'sever is error'});
			if(docs.length <= 0){
				let pass = cry.createHmac('sha512',data.password)
							  .update('I am bydqjx')
							  .digest('hex');
				data.password = pass;
				let dataModule = new db(data);
				dataModule.save();
				msg = {status:0,msg:'success'};
			}else{
				msg = {status:1,msg:'the admin is have'};
			}
			res.send(msg);
		})
	})
}