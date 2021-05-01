import { BrowserRouter as Router , Route , Link ,Switch , NavLink} from 'react-router-dom' ;
const Cart = () => {
	return (
		<div className="cart-branding" >
			<button  type="button" className="Button-Cart"> <NavLink to="/cart" > Cart <span className="fas fa-shopping-cart"></span> </NavLink></button>
		</div>
	) ; 
} ; 

export default Cart ; 