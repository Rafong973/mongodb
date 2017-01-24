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
	date:Number,
	exp:String,
	status:Number,
	admin:String,
	create:Number
})
var Kitten = mongo.model('Kitten',kittySchema);
var Data = mongo.model('Data',KittyData);

export default {Admin : Kitten,Data: Data};


/**
问题类型:
{type:1,name:'锐捷问题'},
{type:2,name:'硬件问题'},
{type:3,name:'软件问题'}

管理员级别
{grade:1,name:'普通管理员'},
{grade:2,name:'最高管理员'}

订单状态
{status: 1 ,name:'未处理'}
{status: 2 ,name:'处理中'}
{status: 3 ,name:'已完成'}

**/