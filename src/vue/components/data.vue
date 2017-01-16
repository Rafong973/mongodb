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
						<a href="javascript:void(0)" v-if="l.status == 2 " @click="my(l._id)">完成处理</a>
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

	data(){
		return{
			time:''
		}
	},

	methods:{
		disDetail(data){
			this.detailData = data;
			this.detail = false
		},
		del(value){
			clearTimeout(this.time);
			const con = '_id='+ value._id +'&no=' + value.no + '&tel='+ value.tel + '&name=' + value.name;
			post('/del',con )
			.then( (res) => {
				if(res.body.status === 0){
					this.$root.$emit('dropFn','删除成功了');
					let self = this;
					this.time = setTimeout(() =>{
						self.list.$remove(value);
					},800)
				}else{
					this.$root.$emit('dropFn','可能失败了');
					return;
				}
			})
		},
		getMy(id){
			let admin = sessionStorage.getItem('admin');
			console.log(admin);
			post('/update','admin=' + admin + '&_id=' + id)
			.then((res) => {
				if(res.body.status===0){
					let l = res.body.msg;
				}else{
					this.$root.$emit('dropFn','接单失败');
				}	
			})
		},
		my(id){
				
		}
	}
}
</script>
