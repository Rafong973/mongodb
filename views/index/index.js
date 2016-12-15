
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
	d.style.marginLeft = "0";
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

$("#data-choose").flatpickr({
	minDate: new Date(),
	enableTime: true,
	"locale": "zh",
	time_24hr:true
})
function ajax(type,u,data){
	var xml = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"),
		d;

	xml.open(type,u,data);
	if(type == 'POST') xml.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	xml.send(data);
	xml.onreadystatechange = function (){
		if(xml.readyState==4 && xml.status==200){
			d = xmlhttp.responseText;
		}else{
			d = false;
		}
	}
	return d;
}

function vaildata(value){
	var f ='';
	if(value.length > 1){
		for(var i = 0;i < value.length;i++){
			var id = value[i].getAttribute("name"),
				va = value[i].value;
			if(!va){
				f = false;
				break;
			}else{
				f += id + '= ' + va + '&';
			}
		}
		return f;
	}
}
$("#save").onclick = function(){
	var d = vaildata($('.input-input'));
	var status = ajax('POST','/save',d);
}