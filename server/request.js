'use strict';

export default function(){ 
	return function (req,res,next){ 
		let t = req.method; 
		let p = req.path;
		if(req.session.i < 1){
			if(t == 'POST' && p !== '/login' && p !== '/sign' && p !== '/save'){ 
				res.send({msg:'you must login',status:5})
			}else{ 
				next(); 
			} 
		}else{
			next();
		}
	} 
} 