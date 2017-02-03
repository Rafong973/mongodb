<template>
	<input type="text" class="input-input large-input" placeholder="{{ pla }}" readonly="readonly" v-model="currentValue" @click="display">
	<ul class="select-list txc fff large-input" v-show='show' :class="{ scroll : selectdata.length > 20}">
		<li v-for="s in selectdata" @click="getData($index)">
			{{ s.name }}
		</li>
	</ul>

	<mask :show.sync="show"></mask>
</template>

<script>

import mask from './mask.vue'

export default{
	name:'',

	props:['selectdata','pla','currentData','currentValue','ulClass','show'],

	components: {
        mask
    },

	methods:{
		getData(index){
			let i = index;
			this.currentValue = this.selectdata[i].name
			this.currentData = this.selectdata[i].no;
			this.show = false;
		},
		display(){
			this.show = !this.show;
		}
	}
}
</script>

<style>
.select-list{
	position: absolute;
	margin:0;
	padding:0;
	cursor: pointer;
	right: 0;
	top:2rem;
	border:1px solid #dfdfdf;
	border-radius: 0.25rem;
	font-size: 0.8125rem;
	z-index: 100;
	li{
		&:not(:last-child){
			border-bottom: 1px solid #dfdfdf;
		}
	}
}
</style>