<template>
	<div class="app">
		<router-view></router-view>
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
	},

}
</script>

<style>
body{font-size:16px;}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(0.625rem);
  opacity: 0;
}
</style>
