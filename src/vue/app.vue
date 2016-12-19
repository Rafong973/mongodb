<template>
	<div class="app">
		<router-view></router-view>
	</div>
</template>


<script>
//js
export default{
	name: 'app',

	data(){
		return{
			name : 'app',
		}
	}

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
