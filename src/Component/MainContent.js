import {DataMainContent} from './DataMainContent.js' ;
import {useState} from 'react' ;
import {DataShopCart} from './DataShopCart.js' ;
const MainContent = () => {
	
	var width_move_brands = window.innerWidth ; 
	
	const [moveMainMenu , setmoveMainMenu] = useState(0) ; 

	const prev_MainMenu = () => {
		if(moveMainMenu > 0) {
			setmoveMainMenu(moveMainMenu - 10) ; 
		}
		else {width_move_brands <= 320 ? setmoveMainMenu(40) : setmoveMainMenu(50) ; }
	} ; 
	
	const next_MainMenu = () => {
		if(width_move_brands <= 320 ? moveMainMenu < 40 : moveMainMenu < 50 ) {
			setmoveMainMenu(moveMainMenu + 10) ; 
		}
		else { setmoveMainMenu(0) ; }
	
	} ;
	
	const addtocart1 = (item , index) => {
		DataShopCart.push(item) ; 
		for(var i = DataShopCart.length - 2 ; i >= 0 ; i--) {
			if(DataMainContent[index].id == DataShopCart[i].id) {
					DataShopCart.pop() ; 
			}
		}
	}
	

	return (
		<div className="maincontent" >
			<div className="container_maincontent" >
				<h2 className="tille_product"> Latest Products </h2>
				<div className="maincontent_btn" >
					<button onClick={prev_MainMenu} > prev </button>
					<button onClick={next_MainMenu} > next </button>
				</div>
				<div style={{clear : "both"}} > </div>
				<div className="product" > 
					<div className="block_product" style={{transition : "0.5s" , transform : `translate(-${moveMainMenu}% , 0)` }} >
						{ DataMainContent.map((item , index) => {
							return (
								<div className="single_product" key={index} >
									<div className="product_img" >
										<img src={item.img} alt=""/>
										<div className="container_a_hover" > 
											<span  className="add-cart" onClick={() => addtocart1(item , index)} > <i className="fas fa-shopping-cart" ></i> ADD TO CART </span>
											<span  className="view-details" > <i className="fa fa-link" ></i> SEE DETAILS </span>
										</div>
										<div className="effect_hover" > </div>
									</div>
									<h2 > <a href="#" >{item.name}</a> </h2>
									<div className="product_price" > <ins >{item.price}</ins> <del >{item.price_sale}</del> </div>
								</div>
							) 
						})}
					</div >
				</div>
			</div>
		</div>
	) ; 
} ; 

export default MainContent ; 