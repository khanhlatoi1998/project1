import {useState , useRef , useEffect} from 'react' ;
import { BrowserRouter as Router , Route , NavLink} from 'react-router-dom' ;

 

const Login = () => { 

	var datalocalStorage = JSON.parse(localStorage.getItem("Ten")) ;
	
	const [localLogin  , setlocalLogin]  = useState([
		    {
				user_signup :	""  ,
				password_signup : "" ,
			} ,
		]) ;  
	
	const LocalStorageLogin = () => {
		console.log(localLogin.user_signup) ; 
		let a = 0 
		for(let i = 0 ; i <= datalocalStorage.length - 1 ; i++ ) {
			if(localLogin.user_signup === datalocalStorage[i].user_login && localLogin.password_login === datalocalStorage[i].password_signup ) {
				alert("Dang Nhap Thanh Cong !") ; 
				a = 1 ; 
			}
		} ;
		if(a == 0){ alert("Sai Mat Khau !") ; }
	} ; 
	
	const onChange = (event) => {
		var target = event.target ; 
		var name = target.name ; 
		var value = target.value ; 
		setlocalLogin({
			...localLogin , 
			[name] : value , 
		}) ; 
	}
	
	return (
		<div className="LoginLogout" > 
			<div className="block_login" > 
				<div className="login" >
					<form >
						<p className="title">Log in</p>  
						<input  placeholder="Email or Username" 
								type="text"
								name="user_signup"
								onChange={onChange}
						/>
						<br />
						<input  placeholder="Password"
								type="password"
								name="password_signup"
								onChange={onChange}
						/>
						<br />
						<p id="forgot" > Forgot Password? </p>
						<p id="p_login" onClick={LocalStorageLogin} >LOG IN</p> 
						<p id="p_signup" ><NavLink to="/signup"  >SIGN UP</NavLink></p>
					</form>
				</div>
			</div>
		</div>
	) ; 
}

export default Login ;  