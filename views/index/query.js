$("#query").onclick = function(){
	var v = vail($(".input-input"));
	if(v){
		var name = $("#query-name").value;
		var tel = $("#query-tel").value;
		var xml = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"),
		d;
		xml.open('POST','/query',true);
		xml.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		xml.send('name=' + name + '&tel=' + tel);
		xml.onload = function(e){
			if(xml.status === 200 && xml.readyState === 4){
				var data = JSON.parse(xml.response);
				if(data.status == 0){
					for(var i=0;i<data.msg.length;i++){
						$('.query-tr')[0].appendChild(tr(data.msg[i],i));
					}
					changeModel(true);
				}else{
					app.alert('无数据，请确认信息是否正确');
					return;
				}
			}
		}
	}
}

function tr(value,index){
	var tr = document.createElement('tr');
	tr.setAttribute('data-id',value.id);
	tr.index = index;
	var one = document.createElement('td');
	var two = document.createElement('td');
	var thr = document.createElement('td');
	var four = document.createElement('td');
	one.innerText = value.name;
	tr.appendChild(one);
	two.innerText = value.tel;
	tr.appendChild(two);
	thr.innerText = getStatus(value.status);
	tr.appendChild(thr);
	tr.appendChild(setOpera(value.status));
	return tr;
}

$('.query-tr')[0].onclick = function(e){
	var event = e;
	var dom = e.target;
	if(dom.nodeName.toLowerCase() == 'a'){
		var p = dom.parentNode.children;
		for(var i=0;i<p.length;i++){
			if(p[i].nodeName == 'DIV'){
				return;
			}
		}
		if(dom.getAttribute('data-js')){
			addDialog(dom.parentNode);	
		}
	}
}

function getStatus(value){
	var temp;
	console.log(value)
	switch(value){
		case 1:
			temp = '未处理'
		break;
		case 2:
			temp = '处理中';
		break;
		case 3:
			temp = '已完成';
		break;
	}
	return temp;
}
// 设置操作状态
function setOpera(value){
	let dom;
	if(value < 3){
		dom = document.createElement('a');
		dom.setAttribute('href','javascript:void(0)');
		dom.setAttribute('data-js','del');
		dom.innerText = '取消订单';
	}else{
		dom = document.createElement('span');
		dom.innerText = '无法操作';
	}
	dom.className = 'query-canel';
	return dom;
}
// 添加二次确认
function addDialog(dom){
	var div = document.createElement('div');
	var a = document.createElement('a');
	var b = document.createElement('a');
	div.className = 'query-dialog';
	a.className = 'pdtr';
	b.className = 'pdtr';
	a.setAttribute('href','javascript:void(0)');
	b.setAttribute('href','javascript:void(0)');
	a.innerText = '确认取消';
	b.innerText = '关闭会话';
	div.appendChild(a);
	div.appendChild(b);
	dom.appendChild(div); 
	b.onclick = function(){
		this.parentNode.remove();
	};
	var id = dom.getAttribute('data-id');
	a.onclick = function(){
		update(id);
		this.parentNode.remove();
	}
}

function update(id){
	if(!id) return;
	var result = null;
	var xml = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"),
		d;
	xml.open('POST','/update',true);
	xml.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	xml.send('_id=' + id + '&status=' + 3);
	xml.onload = function(e){
		if(xml.status === 200 && xml.readyState === 4){
			var data = JSON.parse(xml.response);
			console.log(data);
			if(data.status == 0){
				app.alert('成功取消');
			}else{
				app.alert('取消失败，尝试重新操作');
			}
		}
	}
	return;
}

function changeModel(judge){
	if(judge){
		$('.query-search')[0].style.display = 'none';
		$('.query-data')[0].style.display = 'block';
	}else{
		$('.query-search')[0].style.display = 'block';
		$('.query-data')[0].style.display = 'none';
	}
}
