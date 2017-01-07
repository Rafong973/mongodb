<template>
	<div class="alert op-gray">
		<div class="op-radius"></div>
	</div>
</template>

<script>

export default{

	name:'load',

	data(){
		return{

		}
	},

	method(){

	}
}

</script>

<style>
.op-gray{
	background-color: rgba(0, 0, 0, .5);
	.op-radius{
		height: 1.875rem;
		width: 1.875rem;
		position: absolute;
		border-radius: 50%;
		border: 0.1875rem dashed #000;
		top: 50%;
		left: 50%;
		animation: loading .5s linear infinite;
	}
}
@keyframes loading {
	from { transform: translate3d(-50%, -50%, 0) rotate(0deg) }
	to { transform: translate3d(-50%, -50%, 0) rotate(360deg) }
}

</style>