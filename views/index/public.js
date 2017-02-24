
var $ = window.$ = function(name){
    var n = name.substring(1,name.length),
        t = name.substring(0,1),
        v;
    switch(t){
        case ".":
            v = document.getElementsByClassName(n);
            for(var i=0;i<v.length;i++){
                v[i].index = i;
            }
        break;
        case "#":
            v = document.getElementById(n);
        break;
    }
    
    return v;
};

function removeClass(dom,name){
    var r = new RegExp('(\\s|^)' + name + '(\\s|$)');
    var n = 0;
    var temp = null;
    if(dom.className.match(r)){
        dom.className = dom.className.replace(name,'');
    }else{
        return;
    }
};
function addClass(dom,name){
    var r = new RegExp('(\\s|^)' + name + '(\\s|$)');
    if(dom.className.match(r)){
        return;
    }else{
        var t = '';
        for(var i=0;i<dom.classList.length;i++){
            var c = dom.classList[i] + ' ';
            console.log(c);
            if(i==dom.classList.length) c.trim();
            t += c;
        }
        dom.className = t;
        dom.className += ' ' + name; 
        console.log(dom.className);
    }
    
};
// 添加事件
var EventUtil = {
    addHandler:function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element('on' +type,handler);
        }else{
            element['on'+type] = handler;
        }
    },
    getEvent:function(event){
        return event ? event : window.event;
    },
    stopPropagation:function(event){
        event = event || window.event;
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }
}
//弹出
var app = {
    alert: function(value) {
        if (!value) value = undefined;
        var body = document.getElementsByTagName('body')[0];
        var masked = document.getElementsByClassName("mask") || "";
        // body.style.overflow= "hidden";
        var mask = document.createElement('div');
        var head = document.createElement('div');
        var content = document.createElement('div');
        var mask = document.createElement('div');
        var tip = document.createElement('span');
        var close = document.createElement('a');
        var con = document.createElement('div');
        var p = document.createElement('p');
        var btn = document.createElement('div');
        var lefta = document.createElement('a');
        var leftb = document.createElement('a');
        mask.setAttribute("id", "mask");
        lefta.setAttribute("href", "javascript:void(0)");
        leftb.setAttribute("href", "javascript:void(0)");
        lefta.setAttribute("onclick", "app.close('sure')");
        close.setAttribute("onclick", "app.close()");
        leftb.setAttribute("onclick", "app.close('canel')");
        lefta.innerText = "确定";
        leftb.innerText = "取消";
        lefta.className = "mask-btn-a mask-btn-b";
        leftb.className = "mask-btn-a";
        p.className = "mask-con-p";
        p.innerText = value;
        close.setAttribute("href", "javascript:void(0)");
        close.className = "mask-head-close"
        tip.innerText = "提示";
        tip.className = "mask-head-tip";
        head.appendChild(tip);
        head.appendChild(close);
        btn.className = "mask-btn";
        btn.appendChild(lefta);
        btn.appendChild(leftb);
        con.className = "mask-con";
        mask.className = "mask";
        head.className = "mask-head";
        content.className = "mask-content";
        con.appendChild(p);
        con.appendChild(btn);
        content.appendChild(head);
        content.appendChild(con);
        mask.appendChild(content);
        body.appendChild(mask);
    },
    close: function(attr) {
        var body = document.getElementsByTagName("body")[0];
        var mask = document.getElementsByClassName("mask") || "";
        if (mask) {
            for (var i = 0; i < mask.length; i++) {
                body.removeChild(mask[i]);
            }
        } else {
            return false;
        }
    },
    imgClose: function() {
        var body = document.getElementsByTagName("body")[0];
        var mask = document.getElementsByClassName("imgMask") || "";
        var img = document.getElementsByClassName("mask-img");
        if (mask) {
            var k = mask.length;
            for (var i = 0; i < k; i++) {
                body.removeChild(mask[0])
            }
            var l = img.length;
            for(var j = 0;j < l;j++){
                body.removeChild(img[0]);
            }
            handle.add();
        } else {
            return false;
        }
    },
    mask: function() {
        var body = document.getElementsByTagName('body')[0];
        var mask = document.createElement("div");
        mask.className = "mask";
        var svg = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css"><![CDATA[' +
            '@font-face { font-family: ifont; src: url("//at.alicdn.com/t/font_1442373896_4754455.eot?#iefix") format("embedded-opentype"), url("//at.alicdn.com/t/font_1442373896_4754455.woff") format("woff"), url("//at.alicdn.com/t/font_1442373896_4754455.ttf") format("truetype"), url("//at.alicdn.com/t/font_1442373896_4754455.svg#ifont") format("svg"); }' +
            ']]></style></defs><g class="transform-group"><g transform="scale(0.03125, 0.03125)"><path d="M843.307 742.24c0 3.217 2.607 5.824 5.824 5.824s5.824-2.607 5.824-5.824c0 0 0 0 0 0 0-3.217-2.607-5.824-5.824-5.824-3.217 0-5.824 2.607-5.824 5.824 0 0 0 0 0 0zM714.731 874.912c0 0 0 0 0 0 0 6.398 5.186 11.584 11.584 11.584 6.398 0 11.584-5.186 11.584-11.584 0 0 0 0 0 0 0 0 0 0 0 0 0-6.398-5.186-11.584-11.584-11.584-6.398 0-11.584 5.186-11.584 11.584s0 0 0 0zM541.419 943.2c0 9.614 7.794 17.408 17.408 17.408s17.408-7.794 17.408-17.408c0-9.614-7.794-17.408-17.408-17.408-9.614 0-17.408 7.794-17.408 17.408zM354.859 934.048c0 0 0 0 0 0 0 12.795 10.373 23.168 23.168 23.168 12.795 0 23.168-10.373 23.168-23.168 0 0 0 0 0 0 0 0 0 0 0 0 0-12.795-10.373-23.168-23.168-23.168-12.795 0-23.168 10.373-23.168 23.168s0 0 0 0zM189.355 849.12c0 16.012 12.98 28.992 28.992 28.992s28.992-12.98 28.992-28.992c0 0 0 0 0 0 0-16.012-12.98-28.992-28.992-28.992-16.012 0-28.992 12.98-28.992 28.992 0 0 0 0 0 0zM74.731 704.736c0 19.228 15.588 34.816 34.816 34.816s34.816-15.588 34.816-34.816c0-19.228-15.588-34.816-34.816-34.816-19.228 0-34.816 15.588-34.816 34.816zM31.723 527.456c0 22.41 18.166 40.576 40.576 40.576s40.576-18.166 40.576-40.576c0-22.41-18.166-40.576-40.576-40.576-22.41 0-40.576 18.166-40.576 40.576zM67.115 351.328c0 25.626 20.774 46.4 46.4 46.4s46.4-20.774 46.4-46.4c0-25.626-20.774-46.4-46.4-46.4-25.626 0-46.4 20.774-46.4 46.4zM173.291 209.312c0 28.843 23.381 52.224 52.224 52.224s52.224-23.381 52.224-52.224c0 0 0 0 0 0 0-28.843-23.381-52.224-52.224-52.224-28.843 0-52.224 23.381-52.224 52.224 0 0 0 0 0 0zM329.195 127.968c0 32.024 25.96 57.984 57.984 57.984s57.984-25.96 57.984-57.984c0-32.024-25.96-57.984-57.984-57.984-32.024 0-57.984 25.96-57.984 57.984zM504.299 122.912c0 35.24 28.568 63.808 63.808 63.808s63.808-28.568 63.808-63.808c0 0 0 0 0 0 0-35.24-28.568-63.808-63.808-63.808-35.24 0-63.808 28.568-63.808 63.808 0 0 0 0 0 0zM664.619 195.04c0 38.421 31.147 69.568 69.568 69.568s69.568-31.147 69.568-69.568c0-38.421-31.147-69.568-69.568-69.568-38.421 0-69.568 31.147-69.568 69.568zM778.539 330.528c0 41.638 33.754 75.392 75.392 75.392s75.392-33.754 75.392-75.392c0-41.638-33.754-75.392-75.392-75.392-41.638 0-75.392 33.754-75.392 75.392zM823.851 506.016c0 44.854 36.362 81.216 81.216 81.216s81.216-36.362 81.216-81.216c0-44.854-36.362-81.216-81.216-81.216-44.854 0-81.216 36.362-81.216 81.216z" fill="#272636"></path></g></g></svg>';
        var content = document.createElement("div");
        content.className = "load-content";
        content.innerHTML = svg;
        mask.appendChild(content);
        body.appendChild(mask);
    },
    imgMask: function(value) {
        var body = document.getElementsByTagName('body')[0];
        var mask = document.createElement("div");
        var imgI = document.createElement("div");
        mask.setAttribute("onclick","app.imgClose()");
        mask.className = "mask";
        mask.className += " imgMask";
        var img = document.createElement("img");
        img.className = "mask-img";
        imgI.className = "mask-img";
        if (value) {
            img.setAttribute("src", value);
        } else {
            return false;
        }
        body.appendChild(mask);
        body.appendChild(img);
        body.appendChild(imgI);
        body.style.overflow = "hidden";
        img.onload = function(){
            app.imgLoad(img);
        }
    },
    imgLoad:function(){
        var dom = document.getElementsByClassName('mask-img')[0];
        var imgI = document.getElementsByClassName('mask-img')[1];
        var h = dom.offsetHeight;
        var w = dom.offsetWidth;
        imgI.style.height = h + 10 + 'px';
        imgI.style.width = w + 10 + 'px';
        EventUtil.addHandler(imgI,'mousedown',function(event){
        event = event || window.event;
            app.isDrag = true;
            app.o = event.pageY;
                app.t = dom.top ? dom.top : dom.offsetTop;
        });
        document.onmousemove = app.moveTop;
        document.onmouseup = function(event){
            app.isDrag = false;
        }
        app.add();
    },
    mouse:function(event){
        var event = event || window.event;
        var img = document.getElementsByClassName("mask-img")[0];
        var imgI = document.getElementsByClassName("mask-img")[1]
        if(event.deltaY < 0){
            app.x += 0.1;
        }else{ 
            if(app.x == 1) return;
            app.x -= 0.1;
        }
        img.style.transform = 'translate3d(-50%,-50%,0) scale(' + app.x + ',' + app.x + ')';
        img.style.webkitTransform = 'translate3d(-50%,-50%,0) scale(' + app.x + ',' + app.x + ')';
        imgI.style.transform = 'translate3d(-50%,-50%,0) scale(' + app.x + ',' + app.x + ')';
        imgI.style.webkitTransform = 'translate3d(-50%,-50%,0) scale(' + app.x + ',' + app.x + ')';
    },
    o:0,
    isDrag:false,
    t:0,
    moveTop:function(event){
        if(app.isDrag==true){
            event = event || window.event;
            var t = '';
            var dom = this.getElementsByClassName('mask-img')[0];
            if(app.x <= 1){
                return;
            }else{
                if(app.o < event.pageY){
                    // 向下
                    t = event.pageY - app.o;
                    dom.style.top = t + app.t + 'px';
                }else{ 
                    // 向上
                    t = app.o - event.pageY;
                    dom.style.top = app.t - t + 'px';
                }
            }
        }
    },
    add:function(){
        EventUtil.addHandler(document, 'mousewheel', app.mouse);
        EventUtil.addHandler(document, 'DOMMouseScroll', app.mouse);
    },
    remove:function(){
        document.removeEventListener('mousewheel',app.mouse,false);
        document.removeEventListener('DOMMouseScroll',app.mouse,false);
    },
    x:1
}

function vail(dom){
    var k = false;
    if(dom.length > 1){
        for(var i = 0;i < dom.length;i++){
            if(!switchDom(dom[i])){
                k = false;
                break;
            }else{
                k = true;
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
        case 'house':
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
    var time = new Date();
    time = time.getTime();
    if(f){
        f += '&create=' + time;
        return f.substring(0,f.length-1).replace(/\s+/g,"")
    }else{
     return f
    }
}