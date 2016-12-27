<template>
	<div class="app">
		<router-view
		transition="route"
		transition-mode="out-in"
		:user.sync="curUser"
		>
		</router-view>
		<nav-bar></nav-bar>
		<tip :show.sync="ale" :text="tipText" :count.sync="opera"></tip>
		<drop :show.sync="dropTip"></drop>
	</div>
</template>


<script>
//js
import navBar from './components/nav.vue'
import tip from './components/alert.vue'
import drop from './components/drop.vue'

export default{
	name: 'app',

	data(){
		return{
			name : 'app',
			curUser:{},
			ale:false,
			tipText:'',
			opera:true,
			dropTip:''
		}
	},

	components:{ navBar,tip,drop },

	events:{
		backLogin(res){
			if(res.status == 5){
				this.tipText = '你可能需要重新登陆，才能继续操作';
				this.ale = true;
			}else if(res.status == 3){
				this.ale = true;
				this.tipText = '请求错误，我建议你重新登陆'
			}
		},
		logout(){
			sessionStorage.removeItem('user');
			this.$router.go({path:'/login'});
		},
		dropFn(text){
			let self = this;
			this.dropTip = text;
			setTimeout(function(){
				self.dropTip = '';
			},2500)
		}
	}

}
</script>

<style>
body{font-size:16px;}
.route-transition {
    transition: opacity .5s ease;
}
.route-enter, .route-leave {
    opacity: 0;
}
</style>
