<template>
	<div class="set">
		<div class="set-row">
			<label class="set-label">
				昵称：
			</label>
			<input class="detail-input" type="text" v-model="name" :readonly="nickname" @keyup.enter="update" :class="{active:nickname==false}" v-blue @blur="judge(name)" @focus="get(judge)">
			<a href="javascript:void(0)" v-autofo>修改昵称</a>
		</div>
		<div class="set-row">
			<label class="set-label">
				密码：
			</label>
			<input class="detail-input" type="password" v-model="password" :readonly="passedit" @focus="passedit=false">
			<a href="javascript:void(0)" v-autofo="passedit">修改密码</a>
		</div>
		<div class="set-row" v-if="!passedit">
			<label class="set-label">确认密码：</label>
			<input class="detail-input" type="password" v-model="passagain">
			<a href="javascript:void(0)" @click="pass">确认修改</a>
		</div>
	</div>
</template>

<script>

import { post } from '../script/server'

export default{
	name:'set',

	data(){
		return{
			name:'',
			password:'admin',
			passagain:'',
			nickname:true,
			passedit:true,
			temp:'',
			admin:sessionStorage.getItem('admin')
		}

	},
	methods:{
		update(){
			post('/user','old=' + this.admin + '&admin=' + this.name)
			.then((res)=>{
				if(res.body.status==0){
					this.$root.$emit('dropFn','修改成功');
					sessionStorage.setItem('admin',this.name);
				}else{
					this.$root.$emit('dropFn','修改失败');
				}
				this.nickname = true;
			})
		},
		pass(){
			if(this.password !== this.passagain){
				this.$root.$emit('dropFn','密码不匹配');
				return;
			}else{
				post('/pass','password='+this.password+'&admin='+ this.admin)
				.then((res) =>{
					if(res.body.status==0){
						this.$root.$emit('dropFn','修改成功');
						this.passedit = false;
					}else{
						this.$root.$emit('dropFn','修改失败，尝试重新登陆');
					}
				})
			}
		},
		judge(value){
			if(!value) value = this.temp; 
		},
		get(value){
			this.temp = value;
		}
	},
	created(){
		this.name = sessionStorage.getItem('admin');
		if(!this.name){

		}
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
			border: 0;
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