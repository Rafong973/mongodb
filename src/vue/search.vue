<template>
	<div class="search-body">
		<div class="line">
			<div class="mr">
				<div class="hoz-input">
					<label class="input-label">学号：</label>
					<input type="text" class="input-input large-input" v-model="no" placeholder="输入报修人学号，如果你知道">
				</div>
			</div>
			<div class="mr">
				<div class="hoz-input">
					<label class="input-label">手机号码：</label>
					<input type="text" class="input-input large-input" v-model="no" placeholder="报修人手机号码">
				</div>
			</div>
			<div class="mr">
				<div class="hoz-input">
					<label class="input-label">报修时间：</label>
					<input type="text" class="input-input medium-input" placeholder="起始时间">
				</div>
				<div class="hoz-input">
					<label for="input-label">-</label>
					<input type="text" class="input-input" placeholder="结束时间">
				</div>
			</div>
		</div>
		<div class="line">
			<div class="mr">
				<div class="hoz-input">
					<label class="input-label">姓名：</label>
					<input type="text" class="input-input large-input" v-model="user" placeholder="报修人的名字">
				</div>
			</div>
			<div class="mr">
				<div class="hoz-input">
					<label class="input-label">问题类型：</label>
					<sel :selectData.sync="selType" :pla="'点一下，选择问题类型'" :current-value="typeName" :current-data="type" :show.sync="roomShow"></sel>
				</div>
			</div>
			<div class="mr">
				<div class="hoz-input">
					<label class="input-label">宿舍：</label>
					<sel :selectData.sync="selRoom" :pla="'建议也只能选择'" :current-value="typeName" :current-data="type" :show.sync="show"></sel>
				</div>
			</div>
			<div class="mr">
				<div class="input-group">
					<a href="javascript:void(0)" class="col-8 btn txc btn-primary pdtr" @click="searchData">搜索</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import sel from './select.vue'

export default{
	name:'search',

	data(){
		return{
			name:'search',
			no:'',
			user:'',
			typeName:'',
			type:'',
			typeShow:false,
			roomShow:false,
			selType:[
					{no:0,name:'锐捷问题'},
					{no:1,name:'硬件问题'},
					{no:2,name:'软件问题'}
				],
			selRoom:[
				{name:"珠江公寓A区"},
				{name:"珠江公寓B区"},
				{name:"珠江公寓C区"},
				{name:"珠江公寓D区"},
				{name:"饭堂"},
				{name:"饭堂(珠江公寓)"},
				{name:"足球场"},
				{name:"篮球场"},
				{name:"网球场"},
				{name:"公共区域"},
				{name:"行政楼(原行政办公楼)"},
				{name:"学术交流中心(原3号楼)"},
				{name:"图书錧(原6号宿舍楼)"},
				{name:"1号教学楼(原一号教学楼)"},
				{name:"2号教学楼(原培训楼)"},
				{name:"3号教学楼(原二号教学楼)"},
				{name:"2号实训楼"},
				{name:"3号实训楼(原综合楼)"},
				{name:"4号实训楼(原2号实训楼)"},
				{name:"5号实训楼(原1号实训楼)"},
				{name:"6号实训楼(原3号实训楼)"},
				{name:"7号实训楼(原4号实训楼)"},
				{name:"8号实训楼(原5号实训楼)1"},
				{name:"9号实训楼(原14号楼)"},
				{name:"1号宿舍楼(原7号楼)"},
				{name:"2号宿舍楼(原8号楼)"},
				{name:"3号宿舍楼(原9号楼)"},
				{name:"4号宿舍楼(原10号楼)"},
				{name:"5号宿舍楼"},
				{name:"6号宿舍楼(原11号楼"},
				{name:"7号宿舍楼(12号楼)"},
				{name:"8号宿舍楼(原13号楼)"},
				{name:"1号实训楼"}
			]
		}
	},

	components: {
        sel,
    },

    methods:{
    	searchData(){
    		
    	}
    }
}

</script>

<style>
.search-body{
	margin: 0.9375rem auto;
	border-radius: 0.625rem;
}
.scroll{
	overflow-y: scroll;
	max-height: 400px;
}

</style>