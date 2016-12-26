export default function(){
	return function (req,res,next){
		let t = req.method;
		let p = req.path;
		if(t !== 'POST' && p !== '/login'){
			
		}else{
			next();
		}
	}
}