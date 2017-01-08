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
					<flatpickr v-model="startTime"  placeholder="开始时间" :options="options"></flatpickr>
				</div>
				<div class="hoz-input">
					<label for="input-label">-</label>
					<flatpickr v-model="endTime"  placeholder="结束时间" :options="options"></flatpickr>
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
		<div class="line order-search">
			<button class="btn txc btn-primary pdtr" @click="getData" >所有订单</button>
			<button class="btn txc btn-primary pdtr" @click="getData(`status=1`)">所有未处理订单</button>
			<button class="btn txc btn-primary pdtr" @click="getData(`status=2`)">所有处理中订单</button>
			<button class="btn txc btn-primary pdtr" @click="getData(`status=3`)">所有已完成订单</button>
		</div>
		<div class="line order-search">
			<button class="btn txc btn-primary pdtr" @click="getData(`grade=${this.grade}&admin=${this.user_name}&status=1`)">我的订单</button>
			<button class="btn txc btn-primary pdtr" @click="getData(`grade=${this.grade}&admin=${this.user_name}&status=1`)">我的未处理订单</button>
			<button class="btn txc btn-primary pdtr" @click="getData(`grade=${this.grade}&admin=${this.user_name}&status=2`)">我的处理中订单</button>
			<button class="btn txc btn-primary pdtr" @click="getData(`grade=${this.grade}&admin=${this.user_name}&status=3`)">我的已完成订单</button>
		</div>
	</div>
</template>

<script>

import sel from './components/select.vue'
import roomData from '../data/room.json'
import flatpickr from './flatpickr.vue'
import { post } from '../script/server'

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
			grade:sessionStorage.getItem('user'),
			user_name:sessionStorage.getItem('admin'),
			endTime:'',
			selType:[
					{no:1,name:'锐捷问题'},
					{no:2,name:'硬件问题'},
					{no:3,name:'软件问题'}
				],
			selRoom: roomData,
			msg:[],
			options:{
				enableTime: true,
				time_24hr:true
			}
		}
	},

	components: {
        sel,
        flatpickr
    },

    props:['list'],

    methods:{
    	getTime:getTime,
    	searchData(){
    		let startTime;
    		let endTime;
    		if(this.startTime) startTime = getTime(this.startTime);
    		if(this.endTime){
    			endTime = getTime(this.endTime);
    			if(this.endTime < this.startTime){
    				this.$root.$emit('dropFn','你的时间搞错了！！');
    			}
    		}
    		this.msg = {
				no:this.no,
				tel:this.tel,
				date:startTime,
				endTime:endTime,
				name:this.user,
				type:this.type,
				room:this.room
			};
    		let data = "";
    		for(var x in this.msg){
    			if(this.msg[x]){
    				data += x + '=' + this.msg[x] + "&";
    			}
    		}	
    		if(!data){
    			this.$root.$emit('dropFn','没有条件怎么搜索呢，是吧？');
    			return;
    		}else{
	    		this.getData(data);
    		}
    	},
    	getData(data){
    		if(!data) data = '';
    		post('/data',data)
    		.then((res)=>{
    			this.list = "";
    			switch(res.body.status){
    				case 0:
    					this.list = res.body.msg;
    				break;
    				case 4:
    					this.$root.$emit('dropFn','权限不够，你干了什么？');
    				break;
    				case 3:
    					this.$root.$emit('dropFn','连接服务器失败？？');
    				break;
    				case 5:
    					this.$root.$emit(`backLogin`,res.body);
						this.list = [];
					break;
    			}
    			return;
    		})
    	}
    },
    created(){
    	this.getData();
    }
}

function getTime(value){
	let time = new Date(value);
	return time.getTime();
}
</script>

<style>

@import './assets/flatpickr.min.css';

.search-body{
	width: 68.75rem;
	margin: .9375rem auto;
	border-radius: .625rem;
}
.scroll{
	overflow-y: scroll;
	max-height: 400px;
}
.order-search{
	button{
		margin-right: .9375rem;
	}

}
</style>