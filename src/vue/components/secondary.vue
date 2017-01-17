<template>
	<div class="alert" v-if="tip"></div>
	<div class="alert-content secondary">
		<div class="txc over-hidden">{{ tip }}</div>
		<div class="txc over-hidden">
			<a href="javascript:void(0)" class="btn b`tn-primary pdtr" @click="next">确定</a>
			<a href="javascript:void(0)" class="pdtr" @click="tip=''">关闭</a>
		</div>
	</div>
</template>

<script>
	
export default{
	name:'secondary',

	props:['tip','next']
}
</script>

<style>
.secondary{
	min-width: 150px;
	max-width: 200px;
	div{
		&:first-child{
			margin-bottom: 10px;
		}
	}
}
</style>