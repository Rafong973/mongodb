<template>
	<div class="self-select" v-model="selelctData">
		
	</div>
</template>

<script>

export default{
	name:'self-select',

	data(){
		name:'self-select'
	},

	props:selectData,

	created(){
		console.log(this.name);
	}
}
</script>

<style>
	
</style>