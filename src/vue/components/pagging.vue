<template>
	<div class="page">
		<ul>
			<li>
				<a href="javascript:void(0)">&lt;</a>
			</li>
			<li v-for="i in 10">
				<a href="javascript:void(0)">{{ i+1 }}</a>
			</li>
			<li>
				<a href="javascript:void(0)">&gt;</a>
			</li>
		</ul>
	</div>
</template>

<script>

export default{
	name:'page',

	data(){
		return{

		}
	}
}
</script>

<style>
.page{
	padding: 0.625rem 0;
	position: relative;
	ul{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
	li{
		border-top:1px solid #428bca;
		border-bottom:1px solid #428bca;
		border-right:1px solid #428bca;
		float: left;
		a{
			color: #428bca;
			background-color: #fff;
			display: block;
			padding:0.3125rem 0.625rem;
			&:hover{
				color: #fff;
				background-color: #428bca;
			}
		}
		&:first-child{
			border-left: 1px solid #428bca;
		}
	}
}
</style>