<template>
	<div class="set">
		<div class="set-row">
			<label class="set-label">
				昵称：
			</label>
			<input class="detail-input" type="text" v-model="name" :readonly="nickname" @keyup.enter="update":class="{active:nickname==false}">
			<a href="javascript:void(0)" @click="nickname=false">修改昵称</a>
		</div>
		<div class="set-row">
			<label class="set-label">
				密码：
			</label>
			<input class="detail-input" type="password" v-model="pass" :readonly="passedit">
			<a href="javascript:void(0)" @click="passedit=false">修改密码</a>
		</div>
		<div class="set-row" v-if="!passedit">
			<label class="set-label">确认密码：</label>
			<input class="detail-input" type="password" v-model="passagain">
			<a href="javascript:void(0)">确认修改</a>
		</div>
	</div>
</template>

<script>

import { post } from '../script/server'

export default{
	name:'set',

	data(){
		return{
			name:'管理员',
			pass:'admin',
			passagain:'',
			nickname:true,
			passedit:true
		}

	},
	methods:{
		update:function(){
			post('/user','old=' + sessionStorage.getItem('admin') + '&admin=' + this.name)
			.then((res)=>{
				if(res.body.status==0){
					this.$root.$emit('dropFn','修改成功');
				}else{
					this.$root.$emit('dropFn','修改失败');
				}
				this.nickname = true;
			})
		}
	},
	created(){
		this.name = sessionStorage.getItem('admin');
	},
}
</script>

<style scoped>
.set{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-webkit-transform: translate(-50%, -50%);
	.set-row{
		margin-bottom: 0.625rem;
	}
	.set-label{
		display: inline-block;
		font-size: 0.875rem;
		width: 11.25rem;
		text-align: right;
	}
	input{
		&:focus{
			outline: 0;
		}
	}
	a{
		font-size: 0.75rem;
		color: #428bca;
	}
}
.active{
	border: 0.0625rem solid #428bca;
}

</style>