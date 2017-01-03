import vue from 'vue'

// let t = 'http://localhost'

export function login(accout,password){
	return vue.http.post(
		'/login',
		`u=${accout}&p=${password}`,{
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		})
}

export function post(u,value){
	return vue.http.post(
			u,
			value,{
			headers:{	
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		})
}
