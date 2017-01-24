<template>
	<div class="app">
		<router-view
		transition="route"
		transition-mode="out-in"
		>
		</router-view>
		<nav-bar></nav-bar>
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
			name : 'app',
			tipText:'',
			dropTip:'',
			timeOut:'',
			loading:false,
			secondTip:'',
			tipFn:'',
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
			const con = '_id='+ value._id +'&no=' + value.no + '&tel='+ value.tel + '&name=' + value.name;
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
		getMy(id){
			let admin = sessionStorage.getItem('admin');
			post('/update','admin=' + admin + '&_id=' + id + '&status=2')
			.then((res) => {
				if(res.body.status===0){
					let l = res.body.msg;
				}else{
					this.$root.$emit('dropFn','接单失败');
				}	
			})
		},
		finish(id){
			post('/update','_id='+ id + '&status=3')
			.then((res) => {
				if(res.body.status == 0){
					this.$root.$emit('dropFn','完成处理');
				}else{
					this.$root.$emit('dropFn','操作失败');
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
			sessionStorage.removeItem('user');
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
