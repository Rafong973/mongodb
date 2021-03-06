﻿import express from 'express'
import cookie from 'cookie-parser'
import sta from 'express-static'
import bodyParser from 'body-parser'
import session from 'cookie-session'
import cookieParser from 'cookie-parser'
import request from './server/request'

// new app
const app = express()

// 设置跨域访问
app.all('*', function(req, res,next) {
	res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access`-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods','POST, GET, PUT, DELETE, OPTIONS');
    next();
});

//session and cookie
app.use(cookieParser());
app.use(session({
    name : 'session',
    keys:['keys'],
    maxAge: 6000 * 10 * 10
}));

/**路由**/
import router from './server/router'
router(app)

app.use(request())

/** 请求 */
import server from './server/server'
server(app,bodyParser)


// view engines
import cons from 'consolidate'
import path from 'path'


// 指定视图
app.engine('html',cons.swig)
app.set('views',path.join(__dirname,'views'))
app.set('view engine','html')
//中间件 

//使用静态文件
app.use('/views', express.static(__dirname + '/views'))
app.use(cookie()) //使用cookie
app.use(session({secret:'my secret'})) //使用session
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.listen(8080,function (){
	console.log('app listen on port:8080')
})