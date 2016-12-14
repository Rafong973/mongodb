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
			if(docs.length == 0){
				msg = {status:0,msg:'no this user'};
			}else{
				let pass = cry.createHmac('sha512',data.p)
							  .update('I am bydqjx')
							  .digest('hex');
				if(pass == docs[0].password){
					msg = {
						   status:1,msg:'u r welcome',
					       admin:docs[0].admin,
					       user:docs[0].nickname,
					       grade:docs[0].grade
					      };
				}else{
					msg = {status:2,msg:'password is error'};
				}
				
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