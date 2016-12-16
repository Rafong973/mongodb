var app = {
    alert: function(value) {
        if (!value) value = undefined;
        var body = document.getElementsByTagName('body')[0];
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
                var remove = body.removeChild(mask[i])
            }
        } else {
            return false;
        }
    },
    imgClose: function functionName() {
        var body = document.getElementsByTagName("body")[0];
        var mask = document.getElementsByClassName("imgMask") || "";
        if (mask) {
            for (var i = 0; i < mask.length; i++) {
                var remove = body.removeChild(mask[i])
            }
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
        mask.setAttribute("onclick","app.imgClose()");
        mask.className = "mask";
        mask.className += " imgMask";
        var img = document.createElement("img");
        img.className = "mask-img";
        if (value) {
            img.setAttribute("src", value);
        } else {
            return false;
        }
        mask.appendChild(img);
        body.appendChild(mask);
        body.style.overflow = "hidden";
        var showImg = document.getElementsByClassName("mask-img")[0];
        var imgHeight = showImg.clientHeight;
        var imgWidth = showImg.clientWidth;
        var left = imgHeight > 500 ? "-250px" : "-" + parseInt(imgHeight) / 2 + "px";
        var top = imgWidth > 800 ? "-400px" : "-" + parseInt(imgWidth) / 2 + "px";
        showImg.style.marginLeft = left;
        showImg.style.marginTop = top;
    }
}