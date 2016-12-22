<template>
	<div class="app">
		<router-view
		transition="route"
		transition-mode="out-in"
		:user.sync="curUser"
		>
		</router-view>
		<nav-bar></nav-bar>
	</div>
</template>


<script>
//js
import navBar from './nav.vue'

export default{
	name: 'app',

	data(){
		return{
			name : 'app',
			curUser:{}
		}
	},
	components:{ navBar, },

	events:{

	}

}
</script>

<style>
body{font-size:16px;}
.route-transition {
    transition: opacity .5s ease;
}
.route-enter, .route-leave {
    opacity: 0;
}
</style>
