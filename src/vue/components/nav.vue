<template>
	<div class="nav" v-show="show">
		<a href="javascript:void(0)" class="admin-set" alt="用户设置" @click="getSet" v-show="!judge">用户管理</a>
		<a href="javascript:void(0)" class="admin-set" alt="订单列表" @click="getHome" v-show="judge">订单列表</a>
		<a href="javascript:void(0)" class="logout" alt="退出" @click="logout">退出</a>
	</div>
</template>

<script>

export default{
	name:'nav',

	props:['show'],

	data(){
		return{
			judge:'',
		}
	},
	
	methods:{
		getSet(){
			this.$router.go({path:'/set'});
			this.judge = true;
		},	
		logout(){
			this.$root.$emit('logout');
		},
		getHome(){
			this.$router.go({path:'/home'});
			this.judge = false;
		}	
	},
	created(){
		let self = this;
		this.$router.afterEach(function(transition){
			if(transition.to.path.indexOf('home')>-1){
				self.judge = false;
			}
		})
	}
}
</script>

<style>
.nav{
	position: fixed;
	bottom: 1%;
	right: 1%;
	z-index: 99999;
	text-align: center;
	a{
		display: block;
		margin-bottom: .625rem;
		position: relative;
		font-size: 0.875rem;
		float: left;
		margin-right: 0.9375rem;
		color: #428bca;
	}
}
</style>