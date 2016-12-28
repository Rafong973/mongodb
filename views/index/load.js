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
		$('.index-mask')[0].style.display = 'none';
		$('.banner-title')[0].className += ' title-in';
	},1200);
	banner();
	if(window.innerWidth <= 480){
		document.getElementsByTagName("body")[0].style.width = window.innerWidth;
		rotary();
	}
}

window.onresize = function(){
	banner();
	if(window.innerWidth <= 480){
		rotary();
	}else{
		cleanRotary();
	}
}


function banner(){
	var b = $('.banner');
	for(var i = 0;i<b.length;i++){
		var p = b[i].firstElementChild.clientHeight;
		if(window.innerHeight < 800){
			if(p > window.innerHeight){
				b[i].style.height = p + 'px';
			}else if(p < window.innerHeight){
				b[i].style.height = window.innerHeight + 'px';
			}else{
				b[i].style.height = '800px';
			}
		}else{
			b[i].style.height = '800px';
		}
	}
}