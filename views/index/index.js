
/** 菜单弹出 **/
$(".menu-icon")[0].onclick = function (){
	$(".menu-mask")[0].style.transform = "scale(1,1) translate3d(0,0,0)";
	$(".menu-mask")[0].style.WebkitTransform = "scale(1,1) translate3d(0,0,0)";
	$(".menu-mask")[0].style.opacity = "1";
}
function closeMenu(){
	$(".menu-mask")[0].style.transform = "scale(0,0) translate3d(100%,-100%,0)";
	$(".menu-mask")[0].style.WebkitTransform = "scale(0,0) translate3d(100%,-100%,0)";
	$(".menu-mask")[0].style.opacity = "0";
};
(function (){
	var dom = $(".menu-li");
	var time = '';
	for(var i = 0;i < dom.length;i++){
		clearTimeout(time);
		dom[i].index = i;
		dom[i].onclick = function(){
			closeMenu();
			clearTimeout(time);
			var self = this;
			time = setTimeout(function(){
				rotate($(".banner"),self.index);
			},1000);
		}
	}
})();
/** Ajax请求 **/
function ajax(type,u,data){
	var xml = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"),
		d;
	xml.open(type,u,true);
	if(type == 'POST') xml.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	xml.send(data);
	xml.onload = function (e){
		if(xml.status === 200 && xml.readyState === 4){
			d = JSON.parse(xml.response);
			if(type == 'GET'){
				select($('.room'),d);
				return false;
			}
			if(d.status == 0){
				setTimeout(function(){
					app.close();
				},800)
				setTimeout(function(){
					app.alert("提交成功");
				},800)
				// window.sessionStorage.setItem("repair",data);
				return;
			}
		}else{
			setTimeout(function(){
				app.close();
			},800)
			app.alert("提交失败，请检查网络");
			return false;
		}
	}
}
ajax('GET','./views/data/room.json',null);


/** 提交数据 **/
$("#save").onclick = function(){
 	var d = vaildata($('.input-input')),
 		v = vail($(".input-input"));
 	if(v && d){
 		var session = window.sessionStorage.getItem("repair");
 		if(session){
			app.alert("请勿重复提交");
			return false;
		}
 	}else{
 		app.alert("不填写完整无法报修喔");
 		return false;
 	}
 	app.mask();
	ajax('POST','/save',d);
};

/**自定义下拉菜单 **/
function select(dom,value){
	if(!dom) return;
	var w = dom[0].clientWidth,
		f = dom[0].parentElement,
	   ul = document.createElement('ul');
	 body = document.getElementsByTagName('body');
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
		var c = document.getElementsByClassName('select-mask');
		console.log(c);
		if(e.target){
			a = e.target;
			b = f.getElementsByClassName('input-input')[0];
			b.value = a.innerText;
			b.setAttribute('data',a.getAttribute('value'));
			ul.style.height = '0';
			ul.style.border = '0';
			body[0].removeChild(c[0]);
			switchDom(dom[0])
		}
	});
	f.insertBefore(ul,f.getElementsByClassName('warm-label')[0]);
};
var selectList = [
	{type:1,name:'锐捷问题'},
	{type:2,name:'硬件问题'},
	{type:3,name:'软件问题'}
];
select($('.select'),selectList);
$('.select')[0].onclick = function(){
	var i = this.nextElementSibling;
	i.style.border = '.0625rem solid #ccc';
	// i.style.height = (35+4+2)*3 + 2 + 'px';
	i.style.height = '110px';
	closeSelect();
};
$('.room')[0].onclick = function(){
	var i = this.nextElementSibling;  
	i.style.border = '.0625rem solid #ccc';
	// i.style.height = (35+4+2)*3 + 2 + 'px';
	i.style.height = '150px';
	closeSelect();
};
(function(){
	var t = $('.input-input');
	for(var i = 0;i < t.length;i++){
		t[i].onblur = function(){
			vail(switchDom(this))
		}
	}
})();

/** 日期插件 **/
$("#data-choose").flatpickr({
	enableTime: true,
	"locale": "zh",
	time_24hr:true
});

//关闭下拉列表
function closeSelect(){
	var div = document.createElement('div');
	var select = $('.select-ul');
	div.className = 'alert select-mask';
	div.onclick = function(){
		for(var i=0;i<select.length;i++){
			select[i].style.height = '0';
			select[i].style.border = '0';
			div.style.display = 'none';
		}
	}
	document.getElementsByTagName('body')[0].appendChild(div);
}

