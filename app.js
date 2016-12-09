var express = require("express");
var app = express();


/** mongoDB连接数据库 
var mongo = require("mongodb");
var server = new mongo.Server('127.0.0.1',27000);
new mongo.Db('my-website',server).open(function (err,client){
	//发生错误不执行
	if(err) throw err;
	console.log('connected to mongodb');
	app.users = new mongodb.Collection(client,'users');

})
**/

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
	password:String
})
var Kitten = mongo.model('Kitten',kittySchema);
var slience = new Kitten({ name:'Slience',password:'nihao'});
slience.save(function(err){
	if(err){
		console.log('insert error')
	}else{
		console.log("bingo");
	}
})
Kitten.find({},function(err,docs){
	console.log(docs);
})
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


app.listen(3000,function (){
	console.log('app listen on *:3000');
})