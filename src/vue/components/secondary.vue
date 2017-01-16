<template>
	<div class="alert gray-op" v-if="tip">
		<div class="alert-content secondary">
			<div class="txc over-hidden">{{ tip }}</div>
			<div class="txc over-hidden">
				<a href="javascript:void(0)" class="btn btn-primary pdtr" @click="next">确定</a>
				<a href="javascript:void(0)" class="pdtr" @click="tip=''">关闭</a>
			</div>
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