export default{
	numstatus(value){
		let t;
		switch(value){
			case 1:
				t = '未处理';
			break;
			case 2:
				t = '处理中';
			break;
			case 3:
				t = '已完成';
			break;
			default:
				t = '未知';
			break;
		}
		return t;
	},
	problem(value){
		let t;
		switch(value){
			case 1:
				t = '锐捷问题';
			break;
			case 2:
				t = '硬件问题';
			break;
			case 3:
				t = '软件问题';
			break;
			case 4:
			default:
				t = '未知问题';
			break;
		}
		return t;
	},
	timeReturn(value,judge){
		if(typeof value != 'number') value = parseInt(value);
		let d = new Date(value);
		let	y = d.getFullYear();
		let m = d.getMonth() + 1;
		let t = d.getDate();
		let h = d.getHours();
		let f = d.getMinutes();
		if(f < 10) f += '0';
		if(h < 10) h = '0' + h;
		if(m < 10) m = '0' + m;
		if(!d){
			if(t !== 31) t -= 1;
		}else{
			t=t;
		}
		d = y + '-' + m + '-' + t + '  ' + h + ':' + f; 
		return d;
	}
}