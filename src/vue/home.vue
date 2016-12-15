<template>
	<div class="data-body">
		<div class="data-row">
			<div class="search"></div>
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
					<tbody>
						<tr v-for="l in list">
							<td>1</td>
							<td>{{ l.no }}</td>
							<td>{{ l.name }}</td>
							<td>{{ l.tel }}</td>
							<td>{{ l.type }}</td>
							<td>{{ l.room }}</td>
							<td>{{ l.date }}</td>
							<td class="td-spe"> {{ l.exp }}</td>
							<td>{{ l.status }}</td>
							<td>
								<a href="javascript:void(0)">指派</a>
								<a href="javascript:void(0)">删除</a>
								<a href="javascript:void(0)">我来处理</a>
								<a href="javascript:void(0)">完成处理</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>


<script>
//js
import { data } from '../script/server'
export default{
	name: 'home',
	
	data(){
		return{
			name : 'home',
			// list:[{date:"2016-12-18T04:00:00.000Z",exp:"sdfsdf",name:"324234",no:"werewer",room:"23423",tel:234234,type:1,status:1}]
			list:''
		}
	},
	created(){
		this.$loadingRouteData = false;
		data()
		.then((res) => {
			this.list = res.body.msg;
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
}
table{
	font-size: 0.8125rem;
	width: 1100px;
	text-align: center;
	border-collapse: collapse;
	color: #4d6076;
}
th{
	font-style: normal;
	font-weight: 400;
	border: 0.0625rem solid #f0f0f1;
}
thead th{
	padding: 0.625rem 0;
	background-color: #f0f0f1;
}
tbody{
	border: 0.0625rem solid #f0f0f1;
}
tbody tr{
	&:not(:last-child){
		border: 1px solid #f0f0f1;
	}
}
td{
	padding: 0.625rem 0.3125rem;
	line-height: 1.25rem;
	&:not(:last-child){
		border-right: 1px solid #f0f0f1
	}
}
td a{
	color: #4f88c9;
}
table .td-spe{
	width: 15.0rem;
	overflow: hidden;
}
</style>