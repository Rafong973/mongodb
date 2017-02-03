import vue from 'vue';
import router from 'vue-router';
import resource from 'vue-resource';

/**css**/
require('./views/common.css');

/**component**/
import home  from './vue/home.vue'
import app from './vue/app.vue'
import login from './vue/login.vue'
import reg from './vue/register.vue'
import set from './vue/set.vue'

/**directive**/
import vaildate from './script/vaildate'


/**filter**/
import filters from './script/filter'


vue.use(router);
vue.use(resource);

/**directive**/
vue.directive('autofo',vaildate.autofocus);
vue.directive('blue',vaildate.blur);

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
	},
	'/set':{
		component: set
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
	   user = sessionStorage.getItem('admin');
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