'use strict';

/** mongoose 连接数据库**/
var mongo = require('mongoose');
mongo.connect('mongodb://localhost/my-website');
var db = mongo.connection;
db.on('error',function(){
	return res.send({status:4,msg:'no mongoose'})
});
db.once('open',function (){
	console.log('mongodb is connected');
})
var kittySchema = mongo.Schema({
	admin:String,
	password:String,
	nickname: String,
	grade:String
})
var Kitten = mongo.model('Kitten',kittySchema);

module.exports = {Admin : Kitten};