'use strict';

/** mongoose 连接数据库**/
var mongo = require("mongoose");
mongo.connect('mongodb://localhost/my-website');
var db = mongo.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function (){
	console.log("mongodb is connected");
})
var kittySchema = mongo.Schema({
	name:String,
	password:String,
	nickname: String
})
var Kitten = mongo.model('Kitten',kittySchema);

module.exports = {Admin : Kitten};