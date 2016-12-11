var express = require("express");
var app = express();
var mongo = require('./server/mongo');
var insert = require('./server/insert');
import server from './server/server'

server(app);

/** mongoDB连接数据库 
var
var mongo = require("mongodb");
var server = new mongo.Server('127.0.0.1',27000);
new mongo.Db('my-website',server).open(function (err,client){
	//发生错误不执行
	if(err) throw err;
	console.log('connected to mongodb');
	app.users = new mongodb.Collection(client,'users');

})
**/
insert(mongo.Kitten,{name:'name',password:'hello'});
//中间件 
// app.use(express.bodyParser());
// app.use(express.cookieParser());
// app.use(express.session({secret:'my secret'}));

// 指定视图
app.set('view engine','jade');

/** 路由 **/
app.get('/',function (req,res){
	res.render('index',{authenticated:false});
})

app.get('/login',function(req,res){
	res.render('login');
})

app.get('/signup',function(req,res){
	res.render('signup');
})


app.listen(8074,function (){
	console.log('app listen on *:3000');
})