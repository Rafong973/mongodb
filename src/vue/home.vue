<template>
	<div class="data-body">
		<div class="data-row">
			<div class="data-list" v-show="detail == true">
				<search></search>
				<table-data :list.sync="list" :detail-data.sync="detailData" :detail.sync="detail"></table-data>
			</div>
			<page :current.sync="current" :total.sync="total" v-show="all && all.length > 10 && detail"></page>
			<detail :show.sync="detail" :msg.sync="detailData"></detail>
		</div>
	</div>
</template>


<script>
//js
import tableData from './components/data.vue'
import { post } from '../script/server'
import search from './search.vue'
import detail from './detail.vue'
import page from './components/pagging.vue'

export default{
	name: 'home',

	components:[search,detail,page,tableData],
	
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
	watch:{
		'current':function(newValue){
			if(newValue <= 1) this.current = 1;
			if(newValue > this.total){
				newValue = this.total;
				this.current = this.total;
			} 
			this.list = this.all.slice((newValue-1) * 10,newValue*10);
		}
	},
	created(){
		post('/data')
		.then((res) => {
			if(res.body.status == 0){
				this.all = res.body.msg
				this.list = this.all.slice(0,10);
				this.total = Math.ceil(this.all.length / 10);
			}else{  
				this.$root.$emit(`backLogin`,res.body);
				this.all = [];
			}
		})
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