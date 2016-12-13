<template>
	<div class="login-body">
		<div class="login-data">
			<div class="login-title txc">
				<h3>{{ title }}</h3>
			</div>
			<form action="">
				<div class="input-group vertical-input">
					<label class="input-label">Admin：</label>
					<input type="text" class="input-input" v-model="admin">
				</div>
				<div class="input-group vertical-input">
					<label class="input-label">Password：</label>
					<input type="password" class="input-input" v-model="password">
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
					<a href="javascript:void(0)" class="txc btn btn-danger col-12">Go Back</a>
				</div>
			</form>
		</div>
	</div>
</template>


<script>
//js
import {login} from '../script/server'

export default{
	name: 'login',

	data(){
		return{
			title: '登陆',
			name : 'login',
			admin: '',
			password: '',
			remeber: false
		}
	},

	methods:{
		login(){
			if(!this.admin || !this.password){
				this.title ='你当前无法登陆，检查登陆信息';
			}else{
				this.title ='登陆';
				login(this.admin,this.password)
				.then((res) => {
					console.log(res);
				})
				// this.http.post('/login',
				// 	{
				// 		name: this.admin,
				// 		password: this.password
				// 	}
				// 	,
				// 	{
				// 		headers:{
				// 			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
				// 		}
				// 	})
				// }
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