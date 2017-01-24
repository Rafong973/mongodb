<template>
	<div class="login-body">
		<div class="login-data">
			<div class="login-title txc">
				<h3 v-bind:class="{ warm:warm }">{{ title }}</h3>
			</div>
			<form>
				<div class="input-group vertical-input">
					<label class="input-label">Admin：</label>
					<input type="text" class="input-input" v-model="admin" placeholder="用户名，仅用于登陆">
				</div>
				<div class="input-group vertical-input">
					<label class="input-label">NickName：</label>
					<input type="text" class="input-input" v-model="nickname" placeholder="给自己取个好听的名字">
				</div>
				<div class="input-group vertical-input">
					<label class="input-label">Password：</label>
					<input type="password" class="input-input password" v-model="password" placeholder="你的登陆密码，至关重要">
				</div>
				<div class="input-group vertical-input">
					<label class="input-label">PassAgain：</label>
					<input type="password" class="input-input" v-model="passagain" placeholder="确认一下你写的密码对不对">
				</div>
				<div class="input-group vertical-input">
					<label class="input-label">Validation：</label>
					<input type="password" class="input-input" v-model="validation" placeholder="只有够帅的人才能够完成注册">
				</div>
				<div class="input-group vertical-input">
					<input type="checkbox" id="super" class="input-checkbox" v-model="super">
					<label class="check-label" for="super">Super Admin?</label>
				</div>
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
import { post } from '../script/server'

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
			super: '',
			warm:false
		}
	},

	methods:{
		submit(){
			let a = vail(this.passagain);
			let s = this.super ? 2 : 1;
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
				post('/sign',z)
				.then((res) => {
					let data = res.body;
					switch(data.status){
						case 0:
							this.title = '注册成功';
							this.$root.$emit('alertFn','注册成功');
							this.$dispatch('child','logout');
							
						break;
						case 2:
							this.title = '此用户已经存在了';
							this.$root.$emit('dropFn','此用户已经存在了');
							return false;
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
