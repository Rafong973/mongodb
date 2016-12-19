<template>
	<div class="mask" @click="this.show = !this.show" v-show="show"></div>
</template>

<script>

export default{
	name:'vue',

	props:['show'],

	methods:{
		
	}
}
</script>

<style>
.mask{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: transparent;
	z-index: 99;
}
</style>