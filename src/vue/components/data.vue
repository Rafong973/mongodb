<template>
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
				<tr v-for="l in list ">
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
						<a href="javascript:void(0)" @click="del(l)">删除</a>
						<a href="javascript:void(0)" v-if="l.status == 1" @click="my(l._id)">我来处理</a>
						<a href="javascript:void(0)" v-if="l.status == 2" @click="finish(l._id)">完成处理</a>
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
</template>

<script>

import { post } from '../../script/server'

export default{

	name:'tableData',

	props:['list','detailData','detail'],

	events:{
		'deleteId':function(id){
			this.list.$remove(id);
		}
	},

	methods:{
		disDetail(data){
			this.detailData = data;
			this.detail = false
		},
		del(value){
			this.$root.$emit('alertFn','确定删除吗？');
			this.$dispatch('child',['delete',value])
		},
		my(id){
			this.$root.$emit('alertFn','你确定要接受这个订单吗？');
			this.$dispatch('child',['getMy',id])
		},
		finish(id){
			this.$root.$emit('alertFn','你处理好这个订单了吗？');
			this.$dispatch('child',['getMy',id])
		}
	}
}
</script>
