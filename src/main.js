var vue = require("vue");
var router = require("vue-router");
var resource = require("vue-resource");

/**css**/
require('./views/common.css');
require('./views/style.css');

/**component**/
var home  = require('./vue/home.vue');
var about = require('./vue/about.vue');
var app = require('./vue/app.vue');
var login = require('./vue/login.vue');
var reg = require('./vue/register.vue')
vue.use(router);
vue.use(resource);

var route = new router({
	hashbang : false,
	history : false,
	saveScrollPosition: true,
	transitionOnLoad : true,
	transition:true,
	transitionMode: 'out-in'
});

route.map({
	'/home':{
		component: home
	},
	'/about':{
		component: about
	},
	'/login':{
		component: login
	},
	'/reg':{
		component: reg
	}
});

route.redirect({
    '*': '/home'
})

route.afterEach(function(transition){
	console.log("成功浏览到：" + transition.to.path)
})

route.start(app,"#app");