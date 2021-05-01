import {useState } from 'react' ;
import { BrowserRouter as Router , Route , NavLink} from 'react-router-dom' ; 

const Logout = () => { 

	

	const [local  , setlocal]  = useState([
		    {
				user_login :	""  ,
				password_login : "" ,
				repeat_password : "" , 
			} ,
		]) ; 
	
	const [initialLocalSignup , setinitialLocalSignup] = useState([
		{
			user_login : ""  ,
			password_login : "" ,
			repeat_password : "" , 
		} ,
	]) ; 	
	
		
	const saveLocalStorage = () => {
		console.log(local.user_login) ; 
		if(local.password_login === local.repeat_password) {
			initialLocalSignup.push(local) ; 
			var a = 0 ; 
			for( var i = initialLocalSignup.length - 2 ; i >= 0 ; i--) {
				if(local.user_login == initialLocalSignup[i].user_login) {
					initialLocalSignup.splice(initialLocalSignup.length - 1 , 1) ; 
					alert("Tai Khoan Da Ton Tai") ;
					a = 1 ;  
				}
			} 
			if(a == 0) { 
				alert("Dang Ky Thanh Cong") ; 
				localStorage.setItem("Ten" , JSON.stringify(initialLocalSignup)) ; 
			}
		}
		else { alert("Mat Khau Lap Lai Khong Giong") ;}
	}

	const onChange = (event) => {
		var target = event.target ; 
		var name = target.name ; 
		var value = target.value ; 
		setlocal({
			...local , 
			[name] : value , 
		}) ; 
	}
	
	return (
		<div className="LoginLogout" > 
			<div className="block_login" > 
				<div className="login" >
					<form >
						<p className="title">Sign Up</p>  
						<input  placeholder="Email or Username"
								type="text"
								name="user_login"
								onChange={onChange}
						/>
						<br />
						<input  placeholder="Password" 
								name="password_login"
								type="password"
								onChange={onChange}
						/>
						<br />
						<input  placeholder="Repeat Password" style={{marginBottom : "20px"}} 
								type="password"
								name="repeat_password"
								onChange={onChange}
						/>
						<br />
						<p id="p_signup" ><NavLink to="/login" >LOG IN</NavLink></p>
						<p id="p_login" onClick={saveLocalStorage}>SIGN UP</p> 
					</form>
				</div>
			</div>
		</div>
	) ; 
}

export default Logout ; 