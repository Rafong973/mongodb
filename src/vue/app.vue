<template>
	<div class="app">
		<!-- <transition> -->
			<router-view></router-view>
		<!-- </transition> -->
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
</style>
