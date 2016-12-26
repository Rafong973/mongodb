<template>
	<div class="nav">
		<a href="javascript:void(0)" class="admin-set" alt="用户设置" ></a>
		<a href="javascript:void(0)" class="logout" alt="退出" @click="logout"></a>
	</div>
</template>

<script>
export default{
	name:'nav',

	data(){
		return{
			
		}
	},
	methods:{
		logout(){
			this.$root.$emit("logout");
		}
		
	},
	created(){

	}
}
</script>

<style>
.nav{
	width: 1.5625rem;
	position: fixed;
	top: 50%;
	right: 1%;
	z-index: 99999999999999;
	transform: translateY(-50%);
	text-align: center;
	a{
		display: block;
		width: 100%;
		height: 1.5625rem;
		margin-bottom: .625rem;
		position: relative;
	}
	.logout{
		border-radius: 50%;
		border: .1875rem solid #4d6076;
		&:before,&:after{
			content: "";
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}
		&:before{
			height: .3125rem;
			width: .625rem;
			top:-.1875rem;
			background-color: #fafafa;
		}
		&:after{
			height: 0.625rem;
			width: 0.1875rem;
			top: -0.3125rem;
			background-color: #4d6076;
		}
	}
}
.admin-set{

}
</style>