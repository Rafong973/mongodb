'use strict';

import mongo from 'mongoose'

/** mongoose 连接数据库**/
mongo.connect('mongodb://localhost/my-website',{config: { autoIndex:true }});
var Schema = mongo.Schema;
var db = mongo.connection;
db.on('error',(err) => {
	console.log(err);
});
db.once('open',() => {
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
	date:String,
	exp:String,
	status:Number,
	admin:String
})
var Kitten = mongo.model('Kitten',kittySchema);
var Data = mongo.model('Data',KittyData);

export default {Admin : Kitten,Data: Data};