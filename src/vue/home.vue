<template>
	<div class="data-body">
		<div class="data-row">
			<div class="data-list" v-show="detail == true">
				<search></search>
				<div class="data">
					<table class="table"> 
						<thead>
							<tr>
								<th>序号</th>
								<th>学号</th>
								<th>姓名</th>
								<th>手机号码</th>
								<th>问题类型</th>
								<th>宿舍</th>
								<th>预约时间</th>
								<th>问题详情</th>
								<th>状态</th>
								<th>操作</th>
							</tr>
						</thead>
						<tbody v-if="list" class="data-tbody">
							<tr v-for="l in list">
								<td>{{ $index + 1 }}</td>
								<td>{{ l.no }}</td>
								<td>{{ l.name }}</td>
								<td>{{ l.tel }}</td>
								<td>{{ l.type | problem }}</td>
								<td>{{ l.room }}</td>
								<td>{{ l.date | timeReturn }}</td>
								<td class="td-spe"> {{ l.exp }}</td>
								<td>{{ l.status | numstatus }}</td>
								<td>
									<a href="javascript:void(0)" v-if="l.status == 0 && l.admin == 0">指派</a>
									<a href="javascript:void(0)">删除</a>
									<a href="javascript:void(0)" v-if="l.status == 0">我来处理</a>
									<a href="javascript:void(0)" v-if="l.status == 1 ">完成处理</a>
									<a href="javascript:void(0)" @click="disDetail(l)">
										详情
									</a>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="txc" v-show="list.length == 0">
						无数据
					</div>
				</div>
			</div>
			<detail :show.sync="detail" :msg.sync="detailData"></detail>
		</div>
	</div>
</template>


<script>
//js
import { data } from '../script/server'
import search from './search.vue'
import detail from './detail.vue'

export default{
	name: 'home',

	components:[search,detail],
	
	data(){
		return{
			name : 'home',
			list:'',
			detail:true,
			detailData:'',
		}
	},
	created(){
		data()
		.then((res) => {
			if(res.body.status == 0){
				this.list = res.body.msg;
			}else{
				this.$root.$emit('backLogin(res.body)')
				this.list = [];
			}
			
		})
	},
	methods:{
		disDetail(data){
			this.detailData = data;
			this.detail = false
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