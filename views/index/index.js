
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
				window.sessionStorage.setItem("repair",data);
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
	 body = document.getElementsByTagName('body')[0];
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
	ul.addEventListener('click',(function(e){
		return function(e){
			var a,b;
			var c = document.getElementsByClassName('select-mask');
			var d = ul.getElementsByTagName('li');
			if(e.target){
				a = e.target;
				b = f.getElementsByClassName('input-input')[0];
				b.value = a.innerText;
				b.setAttribute('data',a.getAttribute('value'));
				ul.style.height = '0';
				ul.style.border = '0';
				// body.removeChild(c[0]);
				switchDom(dom[0]);
				Array.prototype.forEach.call(d,function(el,index){
					el.style.display = 'none';
				})
			}
		}
	})());
	dom[0].addEventListener('click',(function(e){
		return function(e){
			var liTemp = ul.getElementsByTagName("li");
			Array.prototype.forEach.call(liTemp,function(el,index){
				el.style.display = 'block';
			});
			ul.style.border = '.0625rem solid #ccc';
			if(liTemp.length > 3){
				ul.style.height = '150px';
			}else{
				ul.style.height = '110px';
			}
			// closeSelect()
		}
	})())
	f.insertBefore(ul,f.getElementsByClassName('warm-label')[0]);
};
var selectList = [
	{type:1,name:'锐捷问题'},
	{type:2,name:'硬件问题'},
	{type:3,name:'软件问题'}
];
select($('.select'),selectList);
// $('.select')[0].onclick = function(){
// 	var i = this.nextElementSibling;
// 	i.style.border = '.0625rem solid #ccc';
// 	i.style.height = '110px';
	
// };
// $('.room')[0].onclick = function(){
// 	var i = this.nextElementSibling;  
// 	i.style.border = '.0625rem solid #ccc';
// 	i.style.height = '150px';
	
// };

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

//第二个模块的动画
function studyAni(judge){
	var study = $('.study'),
		count = 0.5,
		delay = 0.1;
	if(judge){
		for(var i=0;i<study.length;i++){
			study[i].setAttribute('class','study studyAni');
			study[i].style.animationDelay = count + delay +'s';
			study[i].style.webkitAnimationDelay = count + delay +'s';
			delay += 0.1;
		}
		$('.second-icon')[0].setAttribute('class','second-icon iconAni');
	}else{
		for(var i=0;i<study.length;i++){
			study[i].setAttribute('class','study');
		}
		$('.second-icon')[0].setAttribute('class','second-icon');
	}	
}
// 第一个模块
function loadAni(judge){
	if(judge){
		addClass($('.banner-title')[0],'title-in')
		// $('.banner-title')[0].className += ' title-in';
	}else{
		removeClass($('.banner-title')[0],'title-in')
	}
}
// 凌飞
function clockAni(judge){
	var time = null;
	if(judge){
		clearTimeout(time);
		addClass($('.clock')[0],'hinge');
		addClass($('.lf-exp')[0],'rubber');
		time = setTimeout(function(){
			$('.clock')[0].style.display = 'none';
		}, 1950)
	}else{
		$('.clock')[0].style.display = 'block'
		removeClass($('.clock')[0],'hinge');
		removeClass($('.lf-exp')[0],'rubber');
	}
}
// 部门
function stationAni(judge){
	var dom = $('.join-li');
	var k = 0;
	if(judge){
		var time = null;
		for(var i=0;i<dom.length;i++){
			k += 0.5;
			addClass(dom[i],'zoomIn');
			dom[i].style.animationDelay = k + 's';
			dom[i].style.webkitAnimationDelay = k + 's';
			var a = function(dom){
				return function(){
					dom.style.display = 'inline-block';
				}
			}
			setTimeout(a(dom[i]),k);
		}
	}else{
		clearTimeout(time);
		for(var i=0;i<dom.length;i++){
			removeClass(dom[i],'zoomIn');
			dom[i].style.display = 'none';
		}
	}
}
// 报修
function repair(judge){
	if(judge){
		addClass($('.repair-data')[0],'bounceIn');
	}else{
		removeClass($('.repair-data')[0],'bounceIn');
	}
}
// 切换动画归纳
function Animation(index){
	switch (index) {
		case 0:
			loadAni(true)
			studyAni(false);
			stationAni(false)
			break;
		case 1:
			loadAni(false);
			studyAni(true);
			repair(false);
			break;
		case 2:
			repair(true);
			studyAni(false);
			clockAni(false);
			break;
		case 3:
			repair(false);
			clockAni(true);
			stationAni(false)
			break;
		case 4:
			clockAni(false);
			stationAni(true);
			break;
		default:
			banner();
			break;
	}
}
// 滚动事件
var handle = {
	x:true,
	h:window.innerHeight,
	index:null,
	MouseWheel:function(event){
		if(!handle.x) return;
		var body = $('.body')[0];
	    var dom = getParent(event.target,'banner');
	    var index = dom.index;
	    if(event.deltaY < 0){
	    	if(index == 0) index=1;
	    	index--;
	    }else{
	    	index++;
	    }
	    if(index==5) index = 0;
	    handle.x = false;
		handle.banner(index);
	},
	keyup:function(event){
		if(!handle.x) return;
		event = event || window.event;
		var i = handle.index ? handle.index : null,
		    j = null;
		if(event.keyCode == 38){
			if(!i) return;
			if(i==0) i=1;
			i--;
		}else if(event.keyCode == 40){
			i++;
		}else{
			return;
		}
		if(i==5) i=0;
		handle.x = false;
		handle.banner(i);
	},
	time:function(){
		clearInterval(time);
		var time = setTimeout(function(){
			handle.x = true;
		},800)
	},
	banner:function(index){
		var banner = $('.banner');
		for(var k=0;k<banner.length;k++){
			banner[k].style.top = handle.h +'px';
		}
		handle.index = index;
		handle.scroll(banner[index]);
		banner[index].scrollTop = '1';
		banner[index].style.top = '0px';
		setStatus(index);
		handle.time();
		Animation(index);
	},
	scroll:function(dom){
		clearInterval(time);
		var time = null;
		if(dom.clientHeight > handle.h){
			handle.remove();
		}
		var t = dom.scrollTop;
		var b = dom.scrollHeight;
		var c = dom.clientHeight;
		dom.onscroll = function(e){
			var top = dom.scrollTop;
			if(top == b-c || top == 0){
				time = setTimeout(function(){
					EventUtil.addHandler(document, 'mousewheel', handle.MouseWheel);
        			EventUtil.addHandler(document, 'DOMMouseScroll', handle.MouseWheel);
        			EventUtil.addHandler(document, 'keyup', handle.keyup);
        		},800)
			}else{
				handle.remove();
			}
		}
	},
	add:function(){
		EventUtil.addHandler(document, 'mousewheel', handle.MouseWheel);
		EventUtil.addHandler(document, 'DOMMouseScroll', handle.MouseWheel);
		EventUtil.addHandler(document, 'keyup', handle.keyup);
	},
	remove:function(){
		document.removeEventListener('mousewheel',handle.MouseWheel,false);
		document.removeEventListener('DOMMouseScroll',handle.MouseWheel,false);
		document.removeEventListener('keyup', handle.keyup,false);
	},
};

// 获取父类
function getParent(dom,className){
	var r = new RegExp('(\\s|^)' + className + '(\\s|$)');
	var t = null;
	var temp = null;
	do{
		if(!temp) temp = dom.parentNode;
		else temp = temp.parentNode;
		if(temp.className.match(r)) t = temp
	}while(!t);
	return t;
}
// 教程
$('.study-row')[0].onclick = function(e){
	var a = e.target;
	var s = './views/index/img/';
	if(a.nodeName == 'P' || a.nodeName == 'p'){
		var d = a.getAttribute('data');
		app.imgMask(s + d);
		handle.remove();
	}else{
		return;
	}
};

// 设置状态
function setStatus(index){
	var a = $('.aside-li');
	for(var i=0;i<a.length;i++){
		removeClass(a[i],'active');
	}
	addClass(a[index],'active');
}
// 菜单
(function(){
	var dom = $(".menu-li");
	var aside = $(".aside-li");
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
				Animation(self.index);
			},1000);
		}
	}
	//点击切换
	for(var j=0;j<aside.length;j++){
		aside[j].index = j;
		aside[j].onclick = (function(j){
			return function(){
				var current = $('.current')[0];
				handle.banner(j);
			}
		})(j)
	}
	// 验证
	var t = $('.input-input');
	for(var i = 0;i < t.length;i++){
		t[i].onblur = function(){
			vail(switchDom(this))
		}
	}
	// 切换
	if(!browser.versions.mobile){
		var body = $('.body')[0];
    	body.style.height = window.innerHeight + 'px';
		handle.add();
	}
})();