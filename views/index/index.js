fontsize()
var $ = function(name){
	var n = name.substring(1,name.length),
		t = name.substring(0,1);
	switch(t){
		case ".":
			return document.getElementsByClassName(n);
		break;
		case "#":
			return document.getElementById(n);
		break;
	}
};

$(".menu-icon")[0].onclick = function (){
	var d = $(".nav-ul")[0];
	console.log(d.style);
	if(d.style.marginLeft == "-100%"){
		d.style.marginLeft = "0";
	}else{
		d.style.marginLeft = "-100%";
	}
}

var touch = (function(){
	var x,y;
	return{
		start:function(e){
			var touches = event.targetTouches;
			if(touches.length == 1){
				x = touches[0].pageX;
			}
		},
		move:function(e){
			var touches = event.targetTouches;
			if(touches.length == 1){
				y = touches[0].pageX;
			}
			if((x-y) > 50){
				$(".nav-ul")[0].style.marginLeft = "-100%";
			}
		},
		end:function(e){
			
		}
	}
})();

$(".nav-ul")[0].addEventListener("touchstart",touch.start,false);
$(".nav-ul")[0].addEventListener("touchmove",touch.move,false);
$(".nav-ul")[0].addEventListener("touchend",touch.end,false);


window.onresize = function (){
	fontsize()
}
function fontsize(){
	var deviceWidth = document.documentElement.clientWidth;
	if(deviceWidth > 640) deviceWidth = 640;
	document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
}