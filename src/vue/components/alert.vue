<template>	
	<div class="alert gray-op" v-if="show">
		<div class="alert-content txc">
			<p>{{ text }}</p>
			<a href="javascript:void(0)" class="btn btn-primary pdtr" @click="fn">继续操作</a>
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

	props:['text','show','method'],

	methods:{
		fn(){
			console.log(this.method,typeof this.method);
			if(typeof this.method !== 'string'){
				this.$root.$emit(this.method[0],this.method[1]);
			}else{
				this.$root.$emit(this.method)
			}
			this.text = '';
		}
	},

}

</script>

<style>
.alert{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	font-size: .8125rem;
	z-index: 99999;
}
.gray-op{
	background-color: rgba(0, 0, 0, .2);
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