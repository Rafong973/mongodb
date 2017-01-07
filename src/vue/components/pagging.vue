<template>
	<div class="page txc">
		<ul>
			<li>
				<button class="btn txc btn-primary pdtr" @click="current--" :disabled="current == 1 " :class="{'gray':current<=1}">上一页</button>
			</li>
			<li>
				&nbsp;&nbsp;
				第<input type="text" v-model="current" class="no-bor txc"> 页，共&nbsp;&nbsp;{{ total }}&nbsp;&nbsp;页
				&nbsp;&nbsp;
			</li>
			<li>
				<button class="btn txc btn-primary pdtr" @click="current++" :disabled="current == total" :class="{'gray':current == total}">下一页</button>
			</li>
		</ul>
	</div>
</template>

<script>

export default{
	name:'page',
	
	props:['current','total','list'],

	watch:{
		'current':function(newValue){
			if(newValue <= 1) this.current = 1;
			if(newValue > this.total){
				newValue = this.total;
				this.current = this.total;
			} 
		}
	},
}
</script>

<style>
.page{
	padding: 0.625rem 0;
	position: relative;
	.no-bor{
		border: 0;
		width: 1.25rem;
		&:focus{
			outline: 0;
			border: 0;
		}
	}
	.gray{
		background-color: #ccc;
		border-color: #ccc;
	}
	ul{
		display: inline-block;
	}
	li{	
		float: left;
		line-height: 1.875rem;
	}
}
</style>