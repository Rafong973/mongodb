
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

/** 获取表单数据 **/
function vaildata(value){
	var f ='';
	if(value.length > 1){
		for(var i = 0;i < value.length;i++){
			var id = value[i].getAttribute("name"),
				va = value[i].value,
				da = '';
			if(!va){
				f = false;
				break;
			}else{
				if(id == "date"){
					var k = new Date(va).getTime();
					value[i].setAttribute("data",k);
				}
				da = value[i].getAttribute("data");
				if(da !== null){
					f += id + '= ' + da + '&';
				}else{
					f += id + '= ' + va + '&';
				}
				
			}
		}
	}
	if(f) return f.substring(0,f.length-1).replace(/\s+/g,"")
	else return f
}

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
			switchDom(dom[0])
		}
	})
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
};
$('.room')[0].onclick = function(){
	var i = this.nextElementSibling;   
	i.style.border = '.0625rem solid #ccc';
	// i.style.height = (35+4+2)*3 + 2 + 'px';
	i.style.height = '110px';
};
(function(){
	var t = $('.input-input');
	for(var i = 0;i < t.length;i++){
		t[i].onblur = function(){
			vail(switchDom(this))
		}
	}
})();
function vail(dom){
	var k = false;
	if(dom.length > 1){
		for(var i = 0;i < dom.length;i++){
			var v = dom[i].value;
			if(v){
				if(!switchDom(dom[i])){
					k = false;
					break;
				}else{
					k = true;
				}
			}
		}
	}
	return k;
}
function switchDom(dom){
	var a = dom.getAttribute("name"),
		v = dom.value,
		j = false,
		p = dom.parentElement.lastElementChild,
		s = dom.previousElementSibling.innerText || " ";
	switch(a){
		case 'admin':
		case 'status':
		case 'date':
			j = true;	
		break;
		case 'tel':
			var reg = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}1[3-9][0-9]{9}$)/;
			if(reg.test(v)){
				j = true;
				p.innerText = '';
			}else{
				j = false;
				p.innerText = '手机号码不正确';
			}
		break;
		case 'no':
		case 'name':
		case 'type':
		case 'room':
		case 'exp':
			if(v){
				p.innerText = '';
				j = true;
			}else{
				p.innerText = s.substr(0,s.length-1) + '不能为空，请填写正确';
				j = false;
			}
		break;
	}
	return j;
}


/** 日期插件 **/
$("#data-choose").flatpickr({
	enableTime: true,
	"locale": "zh",
	time_24hr:true
});