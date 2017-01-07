<template>
	<div class="data-body">
		<div class="data-row">
			<div class="data-list" v-show="detail == true">
				<search :list.sync="all"></search>
				<table-data :list.sync="list" :detail-data.sync="detailData" :detail.sync="detail"></table-data>
			</div>
			<page :current.sync="current" :total.sync="total" v-show="all && all.length > 10 && detail"></page>
			<detail :show.sync="detail" :msg.sync="detailData"></detail>
		</div>
		<load v-if="!list"></load>	
	</div>
</template>


<script>
//js
import tableData from './components/data.vue'
import { post } from '../script/server'
import search from './search.vue'
import detail from './detail.vue'
import page from './components/pagging.vue'
import load from './components/load.vue'

export default{
	name: 'home',

	components:{search,detail,page,tableData,load} ,
	
	data(){
		return{
			name : 'home',
			list:'',
			detail:true,
			detailData:'',
			current:'',
			total:'',
			current:1,
			all:''
		}
	},
	methods:{
		getData(){
			post('/data','status=1')
			.then((res) => {
				if(res.body.status == 0){
					this.all = res.body.msg
				}else{  
					this.$root.$emit(`backLogin`,res.body);
					this.all = [];
				}
			})
		}
	},
	created(){
		this.all = "";
		let self = this;
		let time = setTimeout(function(){
			self.getData();
		}, 800);
	},
	watch:{
		'current':function(newValue){
			this.list = this.all.slice((newValue-1) * 10,newValue*10);
		},
		'all':function(newValue,old){
			this.current = 1;
			this.list = this.all.slice(0,10);
			this.total = Math.ceil(this.all.length / 10);
		}
	}
}
</script>

<style>
.data-row{
	position: fixed;
	top: 10%;
	left: 50%;
	transform: translateX(-50%);
	-webkit-transform: translateX(-50%);
	color: #4d6076;
	font-size: 0.8125rem;
	.data{
		min-height: 450px;
	}
}
.table{
	width: 1150px;
	text-align: center;
	border-collapse: collapse;
}
.table th{
	font-style: normal;
	font-weight: 400;
	border: 0.0625rem solid #f0f0f1;
	padding: 0.625rem 0;
	background-color: #f0f0f1;
}
.data-tbody{
	border: 0.0625rem solid #f0f0f1;
}
.data-tbody tr{
	&:not(:last-child){
		border: 1px solid #f0f0f1;
	}
}
.data-tbody td{
	padding: 0.625rem 0.3125rem;
	line-height: 1.25rem;
	&:not(:last-child){
		border-right: 1px solid #f0f0f1
	}
}
.table a,.btn-ng{
	color: #4f88c9;
}
.table .td-spe{
	width: 15.0rem;
	overflow: hidden;
}
</style>