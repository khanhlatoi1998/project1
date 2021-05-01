import {DataShopCart} from './DataShopCart.js' ;
import { BrowserRouter as Router , NavLink} from 'react-router-dom' ;
import React from 'react' ; 
import {useState} from 'react' ;
const Cart = () => {
	
	const myRef = React.createRef() ; 
	
	const [quantity , setquantity] = useState(1) ; 
	
	const [Product_ShopCart ,  setProductShopCart] = useState(DataShopCart) ;
	
	const delete_product = (index) => {
		DataShopCart.splice(index , 1) ; 
		setProductShopCart([...DataShopCart]) ; 
	}
	
	const downQuantity = (item , index) => {
		if(Product_ShopCart[index].quantity > 1) {
			Product_ShopCart[index].quantity -= 1 ;  
			setProductShopCart([...Product_ShopCart]) ;
		}
	}
	
	const upQuantity = (item , index) => {
		Product_ShopCart[index].quantity += 1 ;  
		setProductShopCart([...Product_ShopCart]) ;
	}
	
	
	
	const onchangeInput = (event , index) => {
		var target = event.target ;
		var name = target.name ;  
		var  value = target.value ; 
	}
	
	return (
		<div className="content_shopingcart" >
			<div className="shoping_cart" > Shopping Cart</div>
			<div className="mainproduct_shopingcart" > 
				<div className="block_sidebar" > 
					<div className="single_sidebar" > 
						<p className="title_single_sidebar" >SEARCH PRODUCTS</p>
						<input type="text" placeholder="Search products..." />  
						<div > <a href="#" id="SEARCH" >SEARCH</a> </div>
					</div>
					<div className="single_sidebar" > 
						<p className="title_single_sidebar" >PRODUCTS</p>
						<div className="block_singleproduct_sidebar" > 
							<div className="singleproduc_sidebar" > 
								<img src="./img/product-1.jpg" />
								<div className="content_product_sidebar" > 
									<a href="#">Sony Smart TV - 2015</a>
									<div className="price_product_sidebar" >
										<ins>$400.00</ins> <del>$425.00</del>
									</div>
								</div>
							</div>
							<div className="singleproduc_sidebar" > 
								<img src="./img/product-1.jpg" />
								<div className="content_product_sidebar" > 
									<a href="#">Sony Smart TV - 2015</a>
									<div className="price_product_sidebar" >
										<ins>$400.00</ins> <del>$425.00</del>
									</div>
								</div>
							</div>
							<div className="singleproduc_sidebar" > 
								<img src="./img/product-1.jpg" />
								<div className="content_product_sidebar" > 
									<a href="#">Sony Smart TV - 2015</a>
									<div className="price_product_sidebar" >
										<ins>$400.00</ins> <del>$425.00</del>
									</div>
								</div>
							</div>
							<div className="singleproduc_sidebar" > 
								<img src="./img/product-1.jpg" />
								<div className="content_product_sidebar" > 
									<a href="#">Sony Smart TV - 2015</a>
									<div className="price_product_sidebar" >
										<ins>$400.00</ins> <del>$425.00</del>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="content_product_cart" > 
					<div className="mainproduct_cart" > 
						<table border="1" > 
							<thead> 
								<tr>
									<th ></th>
									<th > </th>
									<th >PRODUCT</th>
									<th >PRICE</th>
									<th >QUANTITY</th>
									<th >TOTAL</th>
								</tr>
							</thead>
							<tbody>
								{
									Product_ShopCart.map((item , index) => {
										return (
											<tr className="content_product" key={index}> 
												<td id="close_product"> <button className="delete_product" onClick={() => delete_product(index)}> <span>x</span> </button> </td >
												<td id="img_pruductcart"> <img src={item.img} alt="64" /> </td >
												<td id="width_nameproduc"> <NavLink to="#" >{item.name}</NavLink> </td >
												<td >£15.00</td >
												<td >
													<button type="button" onClick={() => downQuantity(item.quantity , index)}>-</button>
													<input name="quantity"  type="text" onChange={(event,index) => onchangeInput(event,index)} value={item.quantity} /> {/* tạo ref = tên , tên lúc này đã được khởi tạo ref = lệnh React.createRef() , dùng để lấy giá trị ô input , textarea ... , ref sẽ lưu trữ các element khi sử dụng  có thể khai báo ra bắng lệnh myRef.current.nameproperty */} 
													<button type="button" onClick={() => upQuantity(item.quantity , index)} >+</button>
												</td >
												<td >£15.00</td >
											</tr>
										)
									})
								}
								<tr > 
									<td colSpan="6" className="coupon">
										<div  >
											Coupon: <input placeholder="Coupon code" />
											<button id="applycoupon" >APPLY COUPON</button>
											<button id="updatecart" >UPDATE CART</button>
											<button id="checkout" >CHECK OUT</button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div className="information" > 
							<b >Buyer/receive goods</b>
							<p >Name</p>
							<input placeholder="Recipient's name" />
							<p>Contact phone</p>
							<input placeholder="phone number" />
							<p>Address</p>
							<input placeholder="address" />
							<p >Note</p>
							<textarea rows="3" >
							</textarea>
							<br />
							<span >Order</span>
						</div>
					</div>
				</div>
			</div> 
		</div>
	) ; 
} ; 

export default Cart ; 