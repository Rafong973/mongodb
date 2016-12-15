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
					<label class="input-label">NickName：</label>
					<input type="text" class="input-input" v-model="nickname">
				</div>
				<div class="input-group vertical-input">
					<label class="input-label">Password：</label>
					<input type="password" class="input-input password" v-model="password" >
				</div>
				<div class="input-group vertical-input">
					<label class="input-label">PassAgain：</label>
					<input type="password" class="input-input" v-model="passagain">
				</div>
				<div class="input-group vertical-input">
					<label class="input-label">Validation：</label>
					<input type="password" class="input-input" v-model="validation">
				</div>
				<div class="input-group vertical-input">
					<input type="checkbox" id="super" class="input-checkbox" v-model="super">
					<label class="check-label" for="super">Super Admin?</label>
				</div>
				<div class="input-group vertical-input"></div>
				<div class="input-group row">
					<a href="javascript:void(0)" class="txc btn btn-primary col-12" @click='submit'>Submit</a>
				</div>
				<div class="input-group row">
					<a href="javascript:void(0)" class="txc btn btn-danger col-12"  v-link="{path:'/login'}">Sign in</a>
				</div>
			</form>
		</div>
	</div>
</template>


<script>
//js
import { reg } from '../script/server'

export default{
	name: 'register',

	data(){
		return{
			title: '注册',
			name : 'register',
			admin: '',
			nickname: '',
			passagain: '',
			validation: '',
			password: '',
			super: false,
			warm:false
		}
	},

	methods:{
		submit(){
			let a = vail(this.passagain);
			let s = this.super ? 0 : 1;
			let arr = {
				admin: this.admin,
				password: this.password,
				nickname: this.nickname,
				validation: this.validation,
				grade: s
			}
			let z = vail(arr);
			this.warm = true;
			if(a && z){	
				reg(z)
				.then((res) => {
					let data = res.body;
					switch(data.status){
						case 0:
							this.title = '注册成功';
						break;
						case 1:
							this.title = '此用户已经存在了';
						break;
						case 4:
							this.title = '管理员验证不通过，检查验证码';
						break;
						case 3:
							this.title = '注册失败，请重试';
						break;
						return false;
					}
				})
			}else{
				this.title = "注册信息不全，无法完成注册"
				return false;
			}
		}
	}
}

function vail(val){
	let v ='';
	if(typeof val === 'object'){
		for(var i in val){
			if(!val[i]) {
				v = false;
				break;
			}else{
				v += i +'='+ val[i] + '&';
			}
		}
	}else{
		if(!val){
			v = false;
		}else{
			v = true;
		}
	}
	return v;
}
</script>


<style>
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
	border-radius: 5px;
	padding: 10px 10px 20px 10px;
	background-color: #fff;
	box-shadow: 3px 3px 3px 3px #dad5d5;
}
.warm{
	color:#d70941;
}
</style>