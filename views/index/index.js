var $ = window.$;
$ = function(name){
	var n = name.substring(1,name.length),
		t = name.substring(0,1);
	switch(t){
		case ".":
			v = document.getElementsByClassName(n);
		break;
		case "#":
			v = document.getElementById(n);
		break;
	}
	return v;
}
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
	xml.onload = function (e){
		if(xml.status == 200 && xml.readyState === XMLHttpRequest.DONE){
			d = JSON.parse(xml.response);
			if(d.status == 0){
				app.alert("提交成功");
				window.sessionStorage.setItem("repair",data);
				return;
			}
		}else{
			app.alert("提交失败，请检查网络");
			return false;
		}
	}
	xml.open(type,u,data);
	if(type == 'POST') xml.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	xml.send(data);
}

function vaildata(value){
	var f ='';
	if(value.length > 1){
		for(var i = 0;i < value.length;i++){
			var id = value[i].getAttribute("name"),
				va = value[i].value,
				da = value[i].getAttribute("data");
			if(!va){
				f = false;
				break;
			}else{
				if(da !== null){
					f += id + '= ' + da + '&';
				}else{
					f += id + '= ' + va + '&';
				}
				
			}
		}
	}
	if(f) return f.substring(0,f.length-1).replace(/\s+/g,"");
	else return f;
}
$("#save").onclick = function(){
 	var d = vaildata($('.input-input'));
 	if(d){
 		var session = window.sessionStorage.getItem("repair");
 		if(session){
				app.alert("请勿重复提交");
				return false;
		}
 	}else{
 		app.alert("不填写完整无法报修喔");
 		return false;
 	}
	ajax('POST','/save',d);
};

function select(dom,value){
	if(!dom) return false;
	var w = dom[0].clientWidth,
		f = dom[0].parentElement,
	   ul = document.createElement('ul');
	f.style.position = 'relative';
	f.style.overflow = 'inherit';
	ul.className = 'select-ul';
	ul.style.width = w +'px';
	for(var i = 0;i < value.length;i++){
		var li = document.createElement('li');
		li.innerText = value[i].name;
		li.setAttribute('value',value[i].type);
		ul.appendChild(li);
	}
	ul.addEventListener('click',function(e){
		var a,b;
		if(e.target){
			a = e.target;
			b = f.getElementsByClassName('input-input')[0];
			b.value = a.innerText;
			b.setAttribute('data',a.getAttribute('value'));
			ul.style.height = '0';
			ul.style.border = '0';
		}
	})
	f.insertBefore(ul,f.getElementsByClassName('warm-label')[0]);
};

var data = [
	{type:0,name:'锐捷问题'},
	{type:1,name:'硬件问题'},
	{type:2,name:'软件问题'}
];

select($('.select'),data);

$('.select')[0].onclick = function(){
	var i = this.nextElementSibling;   
	i.style.border = '.0625rem solid #ccc'
	i.style.height = (35+4+2)*3 + 2 + 'px';
}