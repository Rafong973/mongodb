<template>
	<div class="login-body">
		<div class="login-data">
			<div class="login-title txc">
				<h3>{{ title }}</h3>
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
					<input type="password" class="input-input" v-model="password">
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
					<a href="javascript:void(0)" class="txc btn btn-primary col-12">Submit</a>
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
	name: 'register',

	data(){
		return{
			title: '注册',
			name : 'register',
			admin: '',
			nickname: '',
			passagain: '',
			password: '',
			super: false
		}
	},

	methods:{
		
	}
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

</style>