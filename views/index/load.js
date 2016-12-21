/**获取元素**/
var $ = window.$;
$ = function(name){
	var n = name.substring(1,name.length),
		t = name.substring(0,1),
		v;
	switch(t){
		case ".":
			v = document.getElementsByClassName(n);
		break;
		case "#":
			v = document.getElementById(n);
		break;
	}
	return v;
};

window.onload = function(){
	setTimeout(function(){
		$('.loading')[0].style.display = 'none';
		$('.body-mask-gray')[0].style.display = 'none';
		$('.banner-title')[0].className += ' title-in';
	},900);
}