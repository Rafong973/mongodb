'use strict';

import user from './mongo';
import cry from 'crypto';

// 数据库表
const db = user.Admin;
const re = user.Data;

// 管理员验证	
const vail = 'adminpd123';

let err = (value) =>{
	return {status:3,msg:value};
}
let success = (dom) => {
	return {status:0,msg:dom};
}

const pderror = {status:2,msg:'password is error'};
export default function server(app,body){
	

	app.post('/login',body.urlencoded(),function(req,res){
		const data = req.body;
		let msg = '';
		if (!data) return res.sendStatus(400);
		db.find({admin:data.u},function(err,docs){
			if(docs.length == 0){
				msg = err('no this user');
			}else{
				let pass = cry.createHmac('sha512',data.p)
							  .update('I am bydqjx')
							  .digest('hex');
				if(pass == docs[0].password){
					msg = {
						   status:0,msg:'u r welcome',
					       admin:docs[0].admin,
					       user:docs[0].nickname,
					       grade:docs[0].grade
					      };
					req.session.i = 1;
				}else{
					msg = pderror
				}
				
			}
			res.send(msg);
		});
	})

	app.post('/sign',body.urlencoded(),function(req,res,next){
		const data = req.body;
		let msg = '';
		if (!data) return xres.sendStatus(400);
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
				msg = success('success');
			}else{
				msg = {status:2,msg:'the admin is have'};
			}
			res.send(msg);
		})
	})

	app.post('/data',body.urlencoded(),function(req,res,next){
		let data = req.body;
		let startTime = data.date || "";
		let endTime = data.endTime || "";
		let condition = "";
		if(startTime && endTime){
			data.date = { $gte:parseInt(data.date),$lte:parseInt(data.endTime) };
			delete data.endTime;
		}else{
			if(startTime){
				data.date = { $gt:data.date };
			}
		}
		if(Object.keys(data).length == 0){
			re.find({},function(err,docs){
				if(!err){
					res.send(success(docs));
				}else{
					res.send(error('mongodb is error'))
				}
			})
		}else{
			re.find(data,function(err,docs){
				if(!err){
					res.send(success(docs));
				}else{
					res.send(error('mongodb is error'))
				}
			});
			
		}
	});

	app.post('/save',body.urlencoded(),function(req,res,next){
		const data = req.body;
		let m = new re(data);
		m.save(function(err){
			console.error(err);
		});
		res.send({status:0,msg:'susccess'});
	});

	app.post('/del',body.urlencoded(),(req,res) =>{
		const data = req.data;
		let msg = '';
		re.remove(data,function(err){
			console.log(data);
			if(err){
				msg = err('delete is failed')
			}else{
				msg = success('deleted');
			}
			res.send(msg);
		})
	});
}
