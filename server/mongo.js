'use strict';

/** mongoose 连接数据库**/
var mongo = require('mongoose');
mongo.connect('mongodb://localhost/my-website',{config: { autoIndex:true }});
var Schema = mongo.Schema;
var db = mongo.connection;
db.on('error',function(){
	return res.send({status:4,msg:'no mongoose'})
});
db.once('open',function (){
	console.log('mongodb is connected');
})
var kittySchema = new Schema({
	admin:String,
	password:String,
	nickname: String,
	grade:String
});
var KittyData = new Schema({
	no:String,
	name:String,
	tel:Number,
	type:Number,
	room:String,
	date:Date,
	exp:String,
	status:Number,
	admin:String
})
var Kitten = mongo.model('Kitten',kittySchema);
var Data = mongo.model('Data',KittyData);

module.exports = {Admin : Kitten,Data: Data};