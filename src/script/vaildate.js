export default{
	autofocus(){
		let self = this;
		let t = this.el.previousElementSibling;
		this.el.onclick = function(){
			t.removeAttribute('readonly');
			t.focus();
		}
	},
	blur(){
		this.el.onblur = function(){
			this.setAttribute('readonly','readonly');
		}
	}
}