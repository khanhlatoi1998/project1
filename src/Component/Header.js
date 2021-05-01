import { BrowserRouter as Router , Route , NavLink} from 'react-router-dom' ;

const Header = () => {
	return (
		<header>
			<nav>
				<div className="row-nav" >
					<div className="content-nav-left" > 
						<ul>
							<li> <div><i className="fas fa-user"></i><NavLink to="#">My Account</NavLink></div> </li>
							<li> <div><i className="fas fa-heart"></i><NavLink to="#">Wishlist</NavLink></div> </li>
							<li> <div><i className="fas fa-user"></i><NavLink to="#">My Cart</NavLink></div> </li>
							<li> <div><i className="fas fa-user"></i><NavLink to="#">Checkout</NavLink></div> </li>
							<li> <div><i className="fas fa-user"></i><NavLink to="/login">Login</NavLink></div> </li>
						</ul>
					</div>
					
					<div className="content-nav-right">
						<ul>
							<li > <div><span className="fas fa-envelope"></span><i>khanhlatoi1998</i></div> </li>	
							<li > <div><span className="fas fa-phone"></span><i>037768781</i></div> </li>	
						</ul>
					</div>
				</div>	
			</nav>
		</header>

	) ; 
} ; 

export default Header ; 