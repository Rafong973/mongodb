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
					<input type="text" class="input-input large-input" v-model="tel" placeholder="报修人手机号码">
				</div>
			</div>
			<div class="mr">
				<div class="hoz-input">
					<label class="input-label">报修时间：</label>
					<flatpickr v-model="startTime"  placeholder="开始时间" :option="option"></flatpickr>
				</div>
				<div class="hoz-input">
					<label for="input-label">-</label>
					<flatpickr v-model="endTime"  placeholder="结束时间"></flatpickr>
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
					<sel :selectData.sync="selType" :pla="'点一下，选择问题类型'" :current-data.sync="type" :show.sync="roomShow"></sel>
				</div>
			</div>
			<div class="mr">
				<div class="hoz-input">
					<label class="input-label">宿舍：</label>
					<sel :selectData.sync="selRoom" :pla="'建议也只能选择'" :current-data.sync="room" :show.sync="typeShow"></sel>
				</div>
			</div>
			<div class="mr">
				<div class="input-group">
					<a href="javascript:void(0)" class="col-8 btn txc btn-primary pdtr" @click="searchData" style="max-height:80%;line-height:2.1875rem;">搜索</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import sel from './select.vue'
import roomData from '../data/room.json'
import flatpickr from './flatpickr.vue'

export default{
	name:'search',

	data(){
		return{
			name:'search',
			no:'',
			user:'',
			typeName:'',
			type:'',
			room:'',
			typeShow:false,
			roomShow:false,
			tel:'',
			startTime:'',
			endTime:'',
			selType:[
					{no:0,name:'锐捷问题'},
					{no:1,name:'硬件问题'},
					{no:2,name:'软件问题'}
				],
			selRoom: roomData,
			msg:[],
		}
	},

	components: {
        sel,
        flatpickr
    },

    methods:{
    	searchData(){
    // 		this.msg = [
				// {name:'no',value:this.no},
				// {name:'tel',value:this.tel},
				// {name:'date',value:this.startTime},
				// {name:'name',value:this.user},
				// {name:'type',value:this.type},
				// {name:'room',value:this.room},
    // 		]
    		console.log(this.msg)
    	}
    }
}

</script>

<style>

@import './assets/flatpickr.min.css';

.search-body{
	margin: 0.9375rem auto;
	border-radius: 0.625rem;
}
.scroll{
	overflow-y: scroll;
	max-height: 400px;
}

</style>