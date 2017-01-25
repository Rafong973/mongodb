<template>
	<div class="nav" v-show="show">
		<a href="javascript:void(0)" class="admin-set" alt="用户设置"  v-link="{path:'/set'}">用户管理</a>
		<a href="javascript:void(0)" class="logout" alt="退出" @click="logout">退出</a>
	</div>
</template>

<script>
export default{
	name:'nav',

	props:['show'],
	
	methods:{
		logout(){
			this.$root.$emit('logout');
		}	
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