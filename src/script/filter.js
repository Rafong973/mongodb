export default{
	numstatus(value){
		let t;
		switch(value){
			case 0:
				t = '未处理';
			break;
			case 1:
				t = '处理中';
			break;
			case 2:
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
			case 0:
				t = '锐捷问题';
			break;
			case 1:
				t = '硬件问题';
			break;
			case 2:
				t = '软件问题';
			break;
			case 3:
			default:
				t = '未知问题';
			break;
		}
		return t;
	}
}