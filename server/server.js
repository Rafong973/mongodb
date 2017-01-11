'use strict';

import user from './mongo';
import cry from 'crypto';

// 数据库表
const db = user.Admin;
const re = user.Data;

// 管理员验证	
const vail = 'adminpd123';

let success = (dom) => {
	return {status:0,msg:dom};
}

const pderror = {status:2,msg:'password is error'};

let err = (value) =>{
	return {status:3,msg:value};
}

let op = {status:4,msg:'admin is error'};

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
					const user_temp = {
						admin:docs[0].admin,
					    user:docs[0].nickname,
					    grade:docs[0].grade
					}
					msg = success(user_temp);
					req.session.i = 1;
					req.session.grade = docs[0].grade;
				}else{
					msg = pderror;
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
		db.find({admin:data.admin},function(error,docs){
			if(error) res.send({status:3,msg:'sever is error'});
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
		if(data.grade){
			if(data.grade != req.session.grade){
				res.send(op);
				return;
			}else{
				delete data.grade;
			}
		}
		if(startTime && endTime){
			data.date = { $gte:parseInt(data.date),$lte:parseInt(data.endTime) };
			delete data.endTime;
		}else{
			if(startTime){
				data.date = { $gt:data.date };
			}
		}
		if(Object.keys(data).length == 0){
			re.find({},function(error,docs){
				if(!error){
					res.send(success(docs));
				}else{
					res.send(error('mongodb is error'))
				}
			})
		}else{
			re.find(data,function(error,docs){
				if(!error){
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
		m.save(function(error){
			console.error(error);
		});
		res.send({status:0,msg:'susccess'});
	});

	app.post('/del',body.urlencoded(),(req,res) =>{
		const data = req.body;
		let msg = '';
		re.remove(data,function(error){
			if(error){
				msg = err('delete is failed');
			}else{
				msg = success('deleted');
			}
			res.send(msg);
		})
	});
}
