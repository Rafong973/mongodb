<template>
	<div class="login-body fix">
		<div class="login-data">
			<div class="login-title txc">
				<h3 v-bind:class="{ warm:warm }">{{ title }}</h3>
			</div>
			<form>
				<div class="input-group vertical-input">
					<label class="input-label">Admin：</label>
					<input type="text" class="input-input" v-model="admin" placeholder="输入你的用户名">
				</div>
				<div class="input-group vertical-input">
					<label class="input-label">Password：</label>
					<input type="password" class="input-input password" v-model="password" placeholder="这里写的是密码" @keyup.enter="login">
				</div>
				<div class="input-group vertical-input">
					<input type="checkbox" id="remeber" class="input-checkbox" v-model="remeber" pla>
					<label class="check-label" for="remeber">Remeber Me</label>
				</div>
				<div class="input-group row">
					<a href="javascript:void(0)" class="txc btn btn-primary col-12" @click="login">Sign In</a>
				</div>
				<div class="input-group row">
					<a href="javascript:void(0)" class="txc btn btn-danger col-12" v-link="{path:'/reg'}">Sign up</a>
				</div>
			</form>
		</div>
	</div>
</template>


<script>
//js
import { login } from '../script/server'

export default{
	name: 'login',

	data(){
		return{
			title: '登陆',
			name : 'login',
			admin: '',
			password: '',
			remeber: false,
			warm: false
		}
	},
	methods:{
		login(){
			this.warm = true;
			if(!this.admin || !this.password){
				this.title ='你当前无法登陆，检查登陆信息';
			}else{
				this.title ='登陆';
				login(this.admin,this.password)
				.then((res) => {
					if(res.status == 200){
						if(res.body.status === 0){
							this.title = '正在登陆...';
							sessionStorage.setItem('grade',res.body.msg.grade);
							sessionStorage.setItem('admin',res.body.msg.admin);
							this.$dispatch('loginMsg',res.body.msg)
							sessionStorage.setItem('id',res.body.msg._id);
							this.$router.go({path:'/home'})
						}else{
							this.title = '登陆信息可能存在错误...';
							return false;
						}
					}else{
						this.title = '登陆失败';
						return false;
					}
				})
			}
		}
	}
}
</script>


<style>
.login-body{
	width: 100%;
	height: 100%;
	padding-top: 5%;
}
.login-data{
	margin: 0 auto;
	color: #4d6076;
	width: 18.75rem;
	border-radius: .3125rem;
	padding: .625rem .625rem 1.25rem .625rem;
	background-color: #fff;
	box-shadow: .1875rem .1875rem .1875rem .1875rem #dad5d5;
}
.warm{
	color:#d70941;
}
@media only screen and (max-width:320px) {
	.login-data{
		width: 17.5rem;
	}
}
@media only screen and (max-width:768px) {
	.data-row{
		max-width: 31.25rem;
		overflow: scroll;
	}
}
@media only screen and (max-width:414px) {
	.data-row{
		max-width: 21.875rem;
		overflow: scroll;
	}
}
@media only screen and (max-width:414px) {
	.data-row{
		max-width: 21.875rem;
		overflow: scroll;
	}
}
@media only screen and (max-width:360px) {
	.data-row{
		max-width: 21.875rem;
		overflow: scroll;
	}
}
@media only screen and (max-width:320px) {
	.data-row{
		max-width: 18.75rem;
		overflow: scroll;
	}
}
</style>