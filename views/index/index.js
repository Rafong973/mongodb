
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
	ul.addEventListener('click',function(e){
		var a,b;
		var c = document.getElementsByClassName('select-mask');
		if(e.target){
			a = e.target;
			b = f.getElementsByClassName('input-input')[0];
			console.log(f);
			b.value = a.innerText;
			b.setAttribute('data',a.getAttribute('value'));
			ul.style.height = '0';
			ul.style.border = '0';
			// body.removeChild(c[0]);
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
	i.style.height = '110px';
	closeSelect();
};
$('.room')[0].onclick = function(){
	var i = this.nextElementSibling;  
	i.style.border = '.0625rem solid #ccc';
	i.style.height = '150px';
	closeSelect();
};

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
// 切换动画归纳
function Animation(index){
	switch (index) {
		case 0:
			loadAni(true)
			studyAni(false);
			break;
		case 1:
			loadAni(false);
			studyAni(true);
			break;
		case 2:
			studyAni(false);
			break;
		default:
			// statements_def
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
	    var dom = event.path;
	    var index = null;
	    var bro = null;
	    dom.forEach(function(d,i){
	    	if(d.className=='banner') index = d.index;
	    })
	    if(event.deltaY < 0){
	    	if(index == 0) index=1;
	    	index--;
	    	bro = index + 1;
	    }else{
	    	index++;
	    	bro = index - 1;
	    }
	    if(index==4) index = 0;
	    handle.x = false;
		handle.banner(index,bro);
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
			j = i + 1;
		}else if(event.keyCode == 40){
			i++;
			j = i - 1;
		}else{
			return;
		}
		if(i==4) i=0;
		handle.x = false;
		handle.banner(i,j);
	},
	time:function(){
		clearInterval(time);
		var time = setTimeout(function(){
			handle.x = true;
		},800)
	},
	banner:function(index,next){
		var banner = $('.banner');
		handle.index = index;
		handle.scroll(banner[index]);
		banner[index].scrollTop = '1';
		banner[index].style.top = '0px';
		banner[next].style.top = next * handle.h +'px';
		Animation(index);
		handle.time();
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

// 菜单
(function(){
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
				Animation(self.index);
			},1000);
		}
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