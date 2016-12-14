import { vaildateMobile } from './utils.js'
import vue from 'vue'

export default function(){
	vue.directive('phone',{

		bind:function(el){
			console.log(el)
		},
		update:function(newValue,oldValue){
			if(typeof binding.value !== 'number'){
				throw new Error('非数字');
			}
			this.fn = fn;
		},

		unbind:function(){
	
		}
	})
}
