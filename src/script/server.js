import vue from 'vue'


export function login(accout,password){
	return vue.http.post(
		'/login',
		`u=${accout}&p=${password}`,{
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		})
}

export function reg(value){
	return vue.http.post(
			'/sign',
			value,{
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		})
}

export function data(value){
	return vue.http.post(
			'/data',
			value,{
				headers:{
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}

		)
}