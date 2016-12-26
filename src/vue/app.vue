<template>
	<div class="app">
		<router-view
		transition="route"
		transition-mode="out-in"
		:user.sync="curUser"
		>
		</router-view>
		<nav-bar></nav-bar>
		<tip :show.sync="ale" :text="'你可能需要重新登陆，才能继续操作'" ></tip>
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
			ale:false
		}
	},

	components:{ navBar,tip },

	events:{
		backLogin(res){
			if(res.status == 5){
				this.ale = false;
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
