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
		if(!browser.versions.mobile){
			rotary();
		}
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
var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
       };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
    var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        //在微信中打开
    }
    if (ua.match(/WeiBo/i) == "weibo") {
        //在新浪微博客户端打开
    }
    if (ua.match(/QQ/i) == "qq") {
        //在QQ空间打开
    }
    if (browser.versions.ios) {
        //是否在IOS浏览器打开
    } 
    if(browser.versions.android){
        //是否在安卓浏览器打开
    }
} else {
    //否则就是PC浏览器打开
}