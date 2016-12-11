'use strict';

module.exports = function (db,data){
	if(typeof data !== 'object') return false;
	console.log(data);
	var slience = new db(data);
	db.find({},function(err,docs){
		for(var i in docs){
			if(docs[i].name == slience.name){
				console.log("the data saved");
				return false;
			}	
		}
		slience.save(function(err){
			if(err){
				console.log('insert error')
			}else{
				console.log("bingo");
			}
		})
	})
}