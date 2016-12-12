var express = require("express");
var app = express();
var mongo = require('./server/mongo');
var insert = require('./server/insert');
var cookie = require("cookie-parser");
var session = require("express-session");
/** 请求 **/
import server from './server/server'
server(app);

/**路由**/
import router from './server/router'
router(app);

/**数据库写入操作

*insert(mongo.Kitten,{name:'name',password:'hello'});

**/

//中间件 
// app.use(express.bodyParser());
app.use(cookie()); //使用cookie
app.use(session({secret:'my secret'})); //使用session

// 指定视图
app.set('view engine','jade');




app.listen(8074,function (){
	console.log('app listen on *:3000');
})