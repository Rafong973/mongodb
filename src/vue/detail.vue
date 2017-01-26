<template>
	<div class="detail-body" v-show='!show'>
		<div class="line" style="line-height:2.8175rem;">
			<a href="javascript:void(0)" class="fl btn-ng" @click="back">返回</a>
			<a href="javascript:void(0)" class="fr btn-ng" @click="editData" v-show="edit">编辑</a>
			<a href="javascript:void(0)" class="fr btn-ng" @click="finish" v-show="!edit">完成</a>
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
						<input type="text" class="large-input detail-input" v-model="msg.tel" :readonly="edit" :class="{warm:!edit}">
					</td>
				</tr>
				<tr>
					<td>问题类型</td>
					<td>{{ msg.type | problem }}</td>
				</tr>
				<tr>
					<td>宿舍</td>
					<td>{{ msg.room}}{{ msg.house }}</td>
				</tr>
				<tr>
					<td>预约时间</td>
					<td>
					<span type="text" class="large-input" :class="{warm:!edit}">{{ msg.date | timeReturn }}</span>
					<flatpickr :options="options" v-model="newTime" v-show="!edit" :class="{warm:!edit}"></flatpickr>
					</td>
				</tr>
				<tr>
					<td>报修时间</td>
					<td>{{ msg.create | timeReturn '1' }}</td>
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

import flatpickr from './flatpickr.vue'

export default{
	
	name: 'detail',

	props:['msg','show'],

	components: {
        flatpickr
    },

	data(){
		return{
			edit:true,
			options:{
				enableTime: true,
				time_24hr:true
			},
			newTime:''
		}
	},
	methods:{
		back(){
			this.show = true;
			this.edit = true;
		},
		editData(){
			this.edit = false;
		},
		finish(){
			this.edit = true;
		}
	},
	watch:{
		newTime(newValue){
			let date = new Date(newValue);
			date.setDate(date.getDate()+1);
			let time = date.getTime();
			this.msg.date = time;
		}
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
		&:focus{
			outline: 0;
			border: 0;
		}
	}
	.flatpickr-input{
		text-indent: 0;
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
	}
	td{
		padding: .625rem 0;
		width: 80%;
		position: relative;
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
.detail-input{
	border: 0;
	background-color: #fafafa;
	font-size: .8125rem;
	color: #4d6076;
}
</style>