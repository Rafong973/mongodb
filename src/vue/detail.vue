<template>
	<div class="detail-body" v-show='!show'>
		<div class="line" style="line-height:2.8175rem;">
			<a href="javascript:void" class="fl btn-ng" @click="back">返回</a>
			<a href="javascript:void" class="fr btn-ng">编辑</a>
		</div>
		<table class="detail">
			<tbody>
				<tr>
					<td>学号</td>
					<td>{{ msg.no }}</td>
				</tr>
				<tr>
					<td>手机号码</td>
					<td>
						<input type="text" class="large-input" v-model="msg.tel" :readonly="edit">
					</td>
				</tr>
				<tr>
					<td>问题类型</td>
					<td>{{ msg.type | problem }}</td>
				</tr>
				<tr>
					<td>宿舍</td>
					<td>{{ msg.room }}</td>
				</tr>
				<tr>
					<td>预约时间</td>
					<td>{{ msg.date | timeReturn }}</td>
				</tr>
				<tr>
					<td>报修时间</td>
					<td>2016-20-21 08：00</td>
				</tr>
				<tr>
					<td>接单人</td>
					<td>飞机</td>
				</tr>
				<tr>
					<td>状态</td>
					<td>{{ msg.status | numstatus }}</td>
				</tr>
				<tr>
					<td>问题详情</td>
					<td>{{ msg.exp }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default{
	
	name: 'detail',

	props:['msg','show'],

	data(){
		return{
			edit:true,
		}
	},
	methods:{
		back(){
			this.show = true;
		}
	},
	created(){

	}

}
</script>

<style>
.detail{
	width: 50rem;
	border-collapse: collapse;
}
.detail tr{
	border-top: .0625rem solid #f0f0f1;
	border-right: .0625rem solid #f0f0f1;
	border-left: .0625rem solid #f0f0f1;
	&:last-child{
		border-bottom: .0625rem solid #f0f0f1;
	}
	input{
		border: 0;
		background-color: #fafafa;
		font-size: .8125rem;
		color: #4d6076;
		&:focus{
			outline: 0;
			border: 0;
		}
	}
	td{
		padding: .625rem 0;
		width: 80%;
		&:first-child {
			width: 20%;
			text-align: center;
			border-right: 0.0625rem solid #f0f0f1;
		}
		&:last-child{
			text-indent: 0.9375rem;
		}
	}
}
</style>