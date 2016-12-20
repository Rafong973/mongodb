import vue from 'vue'

let t = 'http://localhost'

export function login(accout,password){
	return vue.http.post(
		t + '/login',
		`u=${accout}&p=${password}`,{
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		})
}

export function reg(value){
	return vue.http.post(
			t + '/sign',
			value,{
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		})
}

export function data(value){
	return vue.http.post(
			t + '/data',
			value,{
				headers:{
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}

		)
}