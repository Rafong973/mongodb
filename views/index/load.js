
window.onload = function(){
    if(!$('.index-mask') || !$('.banner-title')) return;
	setTimeout(function(){
		$('.index-mask')[0].style.display = 'none';
		$('.banner-title')[0].className += ' title-in';
	},800);
	banner();
	if(window.innerWidth <= 480){
		document.getElementsByTagName("body")[0].style.width = window.innerWidth;
		rotary();
	}
}

window.onresize = function(){
	if(window.innerWidth <= 480){
		if(!browser.versions.mobile){
			rotary();
		}
	}else{
		cleanRotary();
	}
    banner();
}
function banner(){
	var b = $('.banner');
	for(var i = 0;i<b.length;i++){
        b[i].index = i;
		var p = b[i].firstElementChild.clientHeight;
		if(p > window.innerHeight){
			b[i].style.height = p + 'px';
            if(!browser.versions.mobile){
                 b[i].style.overflowY = 'scroll';   
            }
		}else {
			b[i].style.height = window.innerHeight + 'px';
            b[i].style.overflowY = 'hidden'; 
		}
        if(!browser.versions.mobile){
            if(i<b.length-1){
                b[i+1].style.top = (i+1) * window.innerHeight + 'px';
            }
        }
	}
};
var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            edge:u.indexOf('Edge') > -1,
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

if(browser.versions.trident || browser.versions.edge){
    var body = document.getElementsByTagName('body')[0];
    var html = document.getElementsByTagName('html')[0];
    html.removeChild(body);
    var h1 = document.createElement('h1');
    var h2 = document.createElement('h1');
    var p = document.createElement('p');
    var div = document.createElement('div');
    div.className = 'text-ie';
    h1.innerText = '拒绝IE浏览器';
    h2.innerText = '共创美好未来';
    p.innerText = '请使用其它浏览器或者手机访问';
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(p);
    html.appendChild(div);
}
