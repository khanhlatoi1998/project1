import Cart from './Cart.js' ;
import {DataShop} from './DataShop.js' ;
import {DataShopCart} from './DataShopCart.js' ;
import {useState ,useEffect } from 'react' ;
import SearchSort from './SearchSort.js' ; 


const ContentShop = () => {
	
	const addtocart = (item , index) => {
			DataShopCart.push(item) ; 
			for(var i = DataShopCart.length - 2 ; i >= 0 ; i--){
				if(DataShop[index].id == DataShopCart[i].id) {
					DataShopCart.pop() ; 
				}
			}
	}
	
	const [moveContentShop , setmoveContentShop] = useState(0) ;

	var height_move_product = window.innerWidth ; 
	
	const paginat1 = () => {
		setmoveContentShop(0) ;
	}
	const paginat2 = () => {
		if(height_move_product <= 320) {
			setmoveContentShop(6.3) ; 
		}
		else { setmoveContentShop(25.5) ; } 
	}
	const paginat3 = () => {
		if(height_move_product <= 320) {
			setmoveContentShop(12.6) ;
		}
		else { setmoveContentShop(51) ; } 
	}
	const paginat4 = () => {
			if(height_move_product <= 320) {
			setmoveContentShop(18.9) ;
		}
		else { setmoveContentShop(76.5) ; }
	}
	const paginat5 = () => {
			if(height_move_product <= 320) {
			setmoveContentShop(25.2) ;
		}
		else { setmoveContentShop(102) ; }
	}
	const prevProduct = () => {
		if(moveContentShop < 3) { /* so them vao de kiem tra */
			setmoveContentShop(moveContentShop -25) ; 
			console.log("d") ; 
		}
		else { if(height_move_product <= 320) {
				if(moveContentShop > 3)
					setmoveContentShop(moveContentShop - 6.3) ; 
			}
		}
	}
	const nextProduct = () => {
		if(moveContentShop > 20 ) { 
			setmoveContentShop(25.2) ; 
		}
		else { if(height_move_product <= 320) {
				setmoveContentShop(moveContentShop + 6.3) ; 
			}
		}
	}
	
	const [Sort , setSort] = useState(DataShop) ; 
	
	const Sorthigh = (data) => {
		setSort([...data]) ; 
	}
	
	const Search = (data) => {
		setSort([...data]) ;  
	}
	
	
	return ( 
		<div className="content_shop" >
			<div className="shop" > Shop </div>
			<SearchSort  
				Sort={Sorthigh}
				Search={Search}
			/>
			<div className="mainproduct_shop" style={height_move_product <= 320 ? {height : "1690px"} : {height : "870px"}}> 
				<div className="block_mainproduct_shop" 
					style={{ transition : "0.2s" , transform : `translate(0 , ${-moveContentShop}%)` ,}}>
						{ Sort.map((item , index) => {
								return (
									<div className="single_product_shop" key={index} >
										<div className="product_img" >
											<img src={item.img} alt=""/>
											<div className="effect_hover" > </div>
										</div>
										<h2 > <a href="#" >{item.name}</a> </h2>
										<div className="product_price" > <ins >${item.price}</ins> <del >{item.price_sale}</del> </div>
										<div className="addtocart" > 
											<span onClick={() =>addtocart(item , index)} >Add to cart</span>
										</div>
									</div>
								) 
						})}
				</div>
			</div>
			<div className="product_paginat" > 
				<ul > 
					<li style={{marginLeft : "-40px"}} > <span onClick={prevProduct}>&lt;&lt;</span> </li>
					<li > <span onClick={paginat1} >1</span> </li>
					<li > <span onClick={paginat2} >2</span> </li>
					<li > <span onClick={paginat3} >3</span> </li>
					<li > <span onClick={paginat4} >4</span> </li>
					<li > <span onClick={paginat5} >5</span> </li>
					<li > <span onClick={nextProduct} >&gt;&gt;</span> </li>
				</ul>
			</div>
		</div>
		

	) ; 
} ; 

export default ContentShop	 ; 