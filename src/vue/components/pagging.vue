<template>
	<div class="page">
		<ul>
			<li>
				<button href="javascript:void(0)" @click="current--" :disabled="current<=0">&lt;</button>
			</li>
			<li v-show="pageJudge > 1">
				<button href="javascript:void(0)" @click="pageJudge--">...</button>
			</li>
			<li v-for="i in pageNum">
				<button href="javascript:void(0)" @click="change($index)" v-bind:class="{'hover':current==$index}">{{ i }}</button>
			</li>
			<li v-show="Math.ceil(totalPage / 10)-1 == pageJudge || pageJudge == 0">
				<button href="javascript:void(0)" @click="pageJudge++">...</button>
			</li>
			<li>
				<button href="javascript:void(0)" @click="current++" :disabled="current >= totalPage-1">&gt;</button>
			</li>
		</ul>
	</div>
</template>

<script>

export default{
	name:'page',

	data(){
		return{
			current:'',
			pageJudge:0,
			totalPage:Math.ceil(this.num.length / 10) * 1,
			total:this.num,
			pageNum:''
		}
	},
	methods:{
		change(index){
			this.current = index;
		}
	},
	watch:{
		'current':function(newValue){
			this.num = this.total.slice(newValue * 10,(newValue+1)*10);
		},
		'pageJudge':function(newValue){
			this.pageNum = changePage(newValue,this.totalPage);
		}
	},

	props:['num'],

	created(){
		this.num = this.total.slice(0,10);
		this.pageNum = changePage(0,this.totalPage);
		console.log(Math.ceil(this.totalPage / 10)-1 == this.pageJudge)
	}
}
function changePage(newValue,total){
	console.log(newValue,total)
	let temp,count,power;
	var arr = [];
	if(newValue == 0){
		count = 1;
		power = 10;
	}else{
		count = total % (newValue*10) + (newValue*10);
		power = total % (newValue*10) > 0 ? newValue * 10 + total % (newValue*10) : newValue * 10;
	}
	for(var i = count;i < power+1;i++){
		arr.push(i);
	}
	return arr;
}
</script>

<style>
.page{
	padding: 0.625rem 0;
	position: relative;
	text-align: center;
	ul{
		display: inline-block;
	}
	li{
		border-top:0.0625rem solid #428bca;
		border-bottom:0.0625rem solid #428bca;
		border-right:0.0625rem solid #428bca;
		float: left;
		.hover{
			color: #fff;
			background-color: #428bca;
		}
		button{
			color: #428bca;
			background-color: #fff;
			display: block;
			border: 0;
			padding:0.3125rem 0.625rem;
			&:hover{
				color: #fff;
				background-color: #428bca;
			}
			&:focus{
				outline: 0;
			}
		}
		&:first-child{
			border-top-left-radius: 0.3125rem;
			border-bottom-left-radius: 0.3125rem;
			border-left: 0.0625rem solid #428bca;
		}
		&:last-child{
			border-top-right-radius: 0.3125rem;
			border-bottom-right-radius: 0.3125rem;
		}
	}
}
</style>