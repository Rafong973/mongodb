<template>
	<div class="alert drop" :class="{dropout:show}" @click="this.show = ''">
		<div class="drop-tip">
			{{ show }}
		</div>
	</div>
</template>

<script>

export default{
	name:'drop',

	props:['show']
}
</script>

<style>
.drop{
	transition: all .5s ease;
	transform: translateY(-100%)
}
.drop-tip{
	background-color: #fff;
	padding: .9375rem 1.25rem;
	border-radius: .3125rem;
	position: absolute;
	left: 50%;
	transform: translate(-50%);
	box-shadow: 0.125rem 0.125rem 0.125rem 0.125rem #dad5d5;
}
.dropout{
	transform: translateY(0);
}
</style>