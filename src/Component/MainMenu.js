import {useState ,useEffect } from 'react' ;
import { BrowserRouter as Router , Route , NavLink} from 'react-router-dom' ;
const MainMenu = () => {
	
	const [OpenMenu , setOpenMenu] = useState(0) ; 

	const Open_Menu = () => {
		setOpenMenu(!OpenMenu) ;
	} ; 
	
	return (
			<div className="MainMenu" onClick={Open_Menu}>
				<div className="block-mainmenu" >
					<div className="Navbar-Header"  >
						<div className="humburger" >
							<div className="line" ></div> 
							<div className="line" ></div> 
							<div className="line" ></div>
						</div>
					</div>
					<div className="Navbar-Collapse" > 
						<ul className="Narbar-ul" >
							<li> <NavLink exact to="/"  > HOME </NavLink> </li>
							<li> <NavLink to="/shop"> SHOP PAGE </NavLink> </li>
							<li> <a href="#"> SINGLE PRODUCT  </a> </li>
							<li> <NavLink to="/cart"> CART </NavLink> </li>
							<li> <a href="#"> CHECKOUT </a> </li>
							<li> <a href="#"> CATEGORY </a> </li>
							<li> <a href="#"> OTHER </a> </li>
							<li> <a href="#"> CONTACT </a> </li>
						</ul>
					</div> 
				</div> 
				<div className="container-menu" style={OpenMenu === true ? {height : "352px"} : {height : "0"}}>
					<div className="row_container-menu"  >
						<div className="drop-down-menu" >
							<div> <NavLink exact to="/" > HOME </NavLink> </div>
							<div> <NavLink to="/shop"> SHOP PAGE </NavLink> </div>
							<div> <a href="#"> SINGLE PRODUCT  </a> </div>
							<div> <NavLink to="/cart"> CART </NavLink> </div>
							<div> <a href="#"> CHECKOUT </a> </div>
							<div> <a href="#"> CATEGORY </a> </div>
							<div> <a href="#"> OTHER </a> </div>
							<div> <a href="#"> CONTACT </a> </div>
						</div>
					</div>
				</div>
			</div>
	) ; 
} ; 

export default MainMenu ; 