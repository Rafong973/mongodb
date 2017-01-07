import vue from 'vue'

let t = 'http://localhost:8080';
// let t = '';

export function login(accout,password){
	return vue.http.post(
		t +'/login',
		`u=${accout}&p=${password}`,{
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		})
}

export function post(u,value){
	return vue.http.post(
			t + u,
			value,{
			headers:{	
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		})
}

