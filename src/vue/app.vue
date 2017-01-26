<template>
	<div class="app">
		<router-view
		transition="route"
		transition-mode="out-in"
		>
		</router-view>
		<nav-bar :show.sync="user"></nav-bar>
		<tip :show.sync="tipText" :text.sync="tipText" :method="tipFn"></tip>
		<drop :show.sync="dropTip"></drop>
	</div>
</template>


<script>
//js
import navBar from './components/nav.vue'
import tip from './components/alert.vue'
import drop from './components/drop.vue'
import secondary from './components/secondary.vue'
import { post } from '../script/server'

export default{
	name: 'app',

	data(){
		return{
			name:'app',
			tipText:'',
			dropTip:'',
			timeOut:'',
			loading:false,
			secondTip:'',
			tipFn:'',
			set:'',
			user:sessionStorage.getItem('admin'),
			time:''
		}
	},

	components:{ navBar,tip,drop,secondary},

	events:{
		backLogin(){
			this.$root.$emit('alertFn','你可能需要重新登陆，才能继续操作');
			this.$dispatch('child','logout');
		},
		dropFn(text){
			let self = this;
			this.dropTip = text;
			clearTimeout(this.timeOut);
			this.timeOut = setTimeout(function(){
				self.dropTip = '';
			},2500)
		},
		delete(value){
			clearTimeout(this.time);
			const con = '_id='+ value._id + '&no=' + value.no + '&tel='+ value.tel + '&name=' + value.name + '&admin=' + sessionStorage.getItem('admin') + '&grade=' + sessionStorage.getItem('grade');
			post('/del',con)
			.then( (res) => {
				if(res.body.status === 0){
					this.$root.$emit('dropFn','删除成功了');
					let self = this;
					this.time = setTimeout(() =>{
						self.$broadcast('deleteId',value);
					},800)
				}else{
					this.$root.$emit('dropFn','可能失败了');
					return;
				}
			})
		},
		update(value){
			post('/update',value)
			.then((res)=>{
				if(res.body.status==0){
					this.$root.$emit('dropFn','操作成功');
				}else{
					this.$root.$emit('dropFn','操纵失败');
				}
				return;
			})
		},
		logout(){
			this.user = '';
			sessionStorage.removeItem('grade');
			sessionStorage.removeItem('admin');
			sessionStorage.removeItem('id');
			this.$router.go({path:'/login'});
		},
		child(msg){
			this.tipFn = msg;
		},
		alertFn(value){
			this.tipText = value;
		},
		loginMsg(value){
			this.user = value.grade;
		}
	}

}
</script>

<style>
body{font-size:16px;}
.app{
	color: #4d6076;
}
.route-transition {
    transition: opacity .5s ease;
}
.route-enter, .route-leave {
    opacity: 0;
}
</style>
