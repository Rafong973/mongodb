<template>
	<div class="app">
		<router-view
		transition="route"
		transition-mode="out-in"
		>
		</router-view>
		<nav-bar></nav-bar>
		<tip :show.sync="tipText" :text="tipText" :fn.sync="alertFnTip"></tip>
		<drop :show.sync="dropTip"></drop>
	</div>
</template>


<script>
//js
import navBar from './components/nav.vue'
import tip from './components/alert.vue'
import drop from './components/drop.vue'
import secondary from './components/secondary.vue'

export default{
	name: 'app',

	data(){
		return{
			name : 'app',
			curUser:{},
			tipText:'',
			dropTip:'',
			timeOut:'',
			loading:false,
			secondTip:'',
			alertFnTip:''
		}
	},

	components:{ navBar,tip,drop,secondary},

	events:{
		backLogin(res){
			if(res.status == 5){
				this.$root.$emit('alertFn','你可能需要重新登陆，才能继续操作',this.logout());
			}else if(res.status == 3){
				this.$root.$emit('alertFn','请求错误，我建议你重新登陆',this.logout());
			}
		},
		dropFn(text){
			let self = this;
			this.dropTip = text;
			clearTimeout(this.timeOut);
			this.timeOut = setTimeout(function(){
				self.dropTip = '';
			},2500)
		},
		alertFn(value,fn){
			this.tipText = value;
			eval(fn);
		}
	},
	methods:{
		logout(){	
			sessionStorage.removeItem('user');
			this.$router.go({path:'/login'});
		},
	}

}
</script>

<style>
body{font-size:16px;}
.app{
	color: #4d6076;
}
.route-transition {
    transition: opacity .5s ease;
}
.route-enter, .route-leave {
    opacity: 0;
}
</style>
