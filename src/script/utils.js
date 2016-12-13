export function vaildateMoblie(value){
	let reg = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}1[3-9][0-9]{9}$)/
	if(!reg.test(vale)){
		return false;
	}else{
		return true;
	}
}
export function validateName(value) {
    let reg = /^[0-9a-zA-Z\u4e00-\u9fa5_-]*$/
    if (!reg.test(value) || !checkLen(value, 4, 30)) {
        return false
    } else {
        return true
    }
}
export function validateEmail(value) {
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!reg.test(value)) {
        return false
    } else {
        return true
    }
}