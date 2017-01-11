<template>	
	<div class="alert" v-show="show">
		<div class="alert-content txc">
			<p>{{ text }}</p>
			<a href="javascript:void(0)" class="btn btn-primary pdtr" @click="comeBack" v-show="count">继续操作</a>
		</div>
	</div>
</template>

<script>

export default{
	name:'alert',

	data(){
		return{
			name:'alert'
		}
	},

	props:['text','show','count'],

	methods:{
		comeBack(){
			this.$root.$emit("logout");
			this.show = false;
		}
	}
}

</script>

<style scoped>
.alert,.alert-mask{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.alert{
	background-color: rgba(0, 0, 0, .2);
	font-size: .8125rem;
	z-index: 99999;
}
.alert-content{
	position: absolute;
	top: 50%;
	left: 50%;
	border-radius: 0.25rem;	
	transform: translate(-50%, -50%);
	background-color: #fff;
	padding: .625rem;
	a{
		display: inline-block;
	}
}

</style>