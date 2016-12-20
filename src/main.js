import vue from 'vue';
import router from 'vue-router';
import resource from 'vue-resource';
// import transition from 'vue-transition';

/**css**/
require('./views/common.css');

/**component**/
import home  from './vue/home.vue'
import app from './vue/app.vue'
import login from './vue/login.vue'
import reg from './vue/register.vue'

import vaildate from './script/vaildate'

import filters from './script/filter'


vue.use(router);
vue.use(resource);

/**directive**/
vue.directive('vaildate',vaildate)

/**filter**/
vue.filter('numstatus',filters.numstatus)
vue.filter('problem',filters.problem)
vue.filter('timeReturn',filters.timeReturn)


var route = new router({
	hashbang : false,
	history : false,
	saveScrollPosition: true
});

route.map({
	'/home':{
		component: home
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
route.beforeEach(function({to,next,abort,redirect}){
	const r = to.path,
	   user = sessionStorage.getItem('user');
	if(!user || user == '/logout'){
		if(r === '/login' || r == '/reg'){
			next()
		}else{
			redirect('/login')
		}
	}else{
		if(r === '/login' || r === '/reg'){
			abort()
		}else{
			next();
		}
	}
})
route.start(app,"#app");