<template>
	<div class="search-body">
		<div class="line">
			<div class="mr">
				<div class="hoz-input">
					<label class="input-label">学号：</label>
					<input type="text" class="input-input large-input" v-model="no" placeholder="输入报修人学号，如果你知道">
				</div>
			</div>
			<div class="mr">
				<div class="hoz-input">
					<label class="input-label">手机号码：</label>
					<input type="text" class="input-input large-input" v-model="no" placeholder="报修人手机号码">
				</div>
			</div>
			<div class="mr">
				<div class="hoz-input">
					<label class="input-label">报修时间：</label>
					<input type="text" class="input-input medium-input" placeholder="起始时间">
				</div>
				<div class="hoz-input">
					<label for="input-label">-</label>
					<input type="text" class="input-input" placeholder="结束时间">
				</div>
			</div>
		</div>
		<div class="line">
			<div class="mr">
				<div class="hoz-input">
					<label class="input-label">姓名：</label>
					<input type="text" class="input-input large-input" v-model="user" placeholder="输入报修人学号，如果你知道">
				</div>
			</div>
			<div class="mr">
				<div class="hoz-input">
					<label class="input-label">手机号码：</label>
					<input type="text" class="input-input large-input" v-model="no" placeholder="报修人手机号码">
				</div>
			</div>
			<div class="mr">
				<div class="hoz-input">
					<label class="input-label">报修时间：</label>
					<input type="text" class="input-input medium-input" placeholder="起始时间">
				</div>
				<div class="hoz-input">
					<label for="input-label">-</label>
					<input type="text" class="input-input" placeholder="结束时间">
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import select from './select.vue'
export default{
	name:'search',

	data(){
		return{
			name:'search',
			no:'',
			user:''
		}
	},

	actived(){
		console.log(this.name);
	}
}

</script>

<style>
.search-body{
	width: 100%;
	margin: 0.9375rem auto;
	overflow: hidden;
}


</style>