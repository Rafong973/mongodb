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
	</div>
</template>


<script>
//js
import navBar from './nav.vue'
import tip from './alert.vue'

export default{
	name: 'app',

	data(){
		return{
			name : 'app',
			curUser:{},
			ale:false,
			tipText:'',
			opera:true
		}
	},

	components:{ navBar,tip },

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
