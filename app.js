var express = require('express');
var app = express();
var mongo = require('./server/mongo');
var cookie = require('cookie-parser');
var session = require('express-session');
var sta = require('express-static');
var bodyParser = require('body-parser');

// view engines
var cons = require('consolidate');
var path = require('path');


/**路由**/
import router from './server/router'
router(app);

/** 请求 */
import server from './server/server'
server(app,bodyParser)

// 指定视图
// app.set('view engine','html');
app.engine('html',cons.swig);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
//中间件 

//使用静态文件
app.use('/views', express.static(__dirname + '/views')); 
app.use(cookie()); //使用cookie
app.use(session({secret:'my secret'})); //使用session
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))



app.listen(80,function (){
	console.log('app listen on *:80');
})