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