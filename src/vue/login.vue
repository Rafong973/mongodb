<template>
	<div class="login-body">
		<div class="login-data">
			<div class="login-title txc">
				<h3 v-bind:class="{ warm:warm }">{{ title }}</h3>
			</div>
			<form>
				<div class="input-group vertical-input">
					<label class="input-label">Admin：</label>
					<input type="text" class="input-input" v-model="admin">
				</div>
				<div class="input-group vertical-input">
					<label class="input-label">Password：</label>
					<input type="password" class="input-input password" v-model="password">
				</div>
				<div class="input-group vertical-input">
					<input type="checkbox" id="remeber" class="input-checkbox" v-model="remeber">
					<label class="check-label" for="remeber">Remeber Me</label>
				</div>
				<div class="input-group vertical-input"></div>
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
						if(res.body.status == 1){
							this.title = '正在登陆...';
							window.sessionStorage.setItem('user',res.body);
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


<style scoped>
.login-body{
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: #fafafa;
}
.login-data{
	position: absolute;
	top: 10%;
	left: 50%;
	transform: translate(-50%);
	-webkit-transform: translate(-50%);
	width: 300px;
	height: 400px;
	border-radius: 5px;
	padding: 10px;
	background-color: #fff;
	box-shadow: 3px 3px 3px 3px #dad5d5;
}

</style>