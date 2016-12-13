<template>
	<div class="app">
		<router-view
		transition-mode="out-in">	
		</router-view>
	</div>
</template>


<script>
import Navbar from './nav.vue'
//js
export default{
	name: 'app',

	components: [Navbar],

	data(){
		return{
			name : 'app',
		}
	},
	created(){
		this.$loadingRouteData = false;
		console.log(this.name);
	},

}
</script>
